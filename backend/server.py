
from flask import Blueprint, jsonify, request, send_from_directory, Flask
from flask_socketio import emit, SocketIO
from flask_cors import CORS
import json
import random

from db_connection import get_conn, get_cursor

from queries.schedule import schedule_query
from queries.home_standings import home_standings_query
from queries.standings import standings_query

from stats.player_stats import player_stats_blueprint
from games.player_stats import game_stats_blueprint
from teams.team_stats import team_stats_blueprint
from articles.publish import publish_articles_blueprint

app = Flask(__name__, static_folder="../dist", static_url_path="")
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, logger=True, engineio_logger=True, cors_allowed_origins="*")

app.register_blueprint(player_stats_blueprint)
app.register_blueprint(game_stats_blueprint)
app.register_blueprint(team_stats_blueprint)
app.register_blueprint(publish_articles_blueprint)


offers = []
top_offers = []
final_offer_checks = {}
current_player_index = 0
current_player = None
free_agent_list = []


@app.route("/api/free-agents")
def get_free_agents():
    conn = get_conn()
    cursor = get_cursor(conn)

    query = "SELECT * FROM free_agency ORDER BY overall DESC"

    cursor.execute(query)
    free_agents = cursor.fetchall()
    free_agents_json = []
    column_names = [cursor[0] for cursor in cursor.description]

    for player in free_agents:
        free_agents_json.append(dict(zip(column_names, player)))
    
    cursor.close()
    conn.close()

    global free_agent_list
    free_agent_list = free_agents
    global current_player
    current_player = free_agent_list[current_player_index]

    return jsonify(free_agents_json)

@socketio.on("connect")
def handle_connect():
    emit("update_player", current_player_index, broadcast=True)
    emit("update_offers", offers, broadcast=True)
    

@socketio.on("disconnect")
def handle_disconnect():
    global final_offer_checks
    del final_offer_checks[request.sid]

    result = []
    for k, v in final_offer_checks.items():
        result.append({'requestId': k, 'data': v})
    emit("final_offer_checks", result, broadcast=True)
   

@socketio.on("send_offer")
def handle_offer(client_offer):
    global offers

    for i, offer in enumerate(offers):
        if client_offer["team"]["team_id"] == offer["team"]["team_id"]:
            offers.pop(i)
    
    offers.append(client_offer)
    emit("update_offers", offers, broadcast=True)


@socketio.on("final_offer_checked")
def handle_final_offer_checked(data):
    is_checked = data["is_checked"]
    team_id = data["team_id"]
    global final_offer_checks
    final_offer_checks[request.sid] = {"isChecked": is_checked, "team_id": team_id}

    result = []
    all_final_offers = True
    for k, v in final_offer_checks.items():
        result.append({'requestId': k, 'data': v})
        if not v["isChecked"]:
            all_final_offers = False

    emit("final_offer_checks", result, broadcast=True)

    
    # All offers are in
    if all_final_offers:
        # spin winner
        # global top_offers
        winner = choose_winner()
        emit("winner", winner, broadcast=True)
        set_current_player_new_team(winner["winner"])

        global current_player_index
        global current_player
        global offers
        offers.clear()
        current_player_index += 1
        current_player = free_agent_list[current_player_index]

        emit("update_player", current_player_index, broadcast=True)

        result = []
        all_final_offers = True
        for k, v in final_offer_checks.items():
            final_offer_checks[k]["isChecked"] = False
            result.append({'requestId': k, 'data': v})
            if not v["isChecked"]:
                all_final_offers = False
            emit("final_offer_checks", result, broadcast=True)
        

def set_current_player_new_team(winner):
    conn = get_conn()
    cursor = get_cursor(conn)
    team = winner["team"]
    team_name = team["team_name"]
    contract = winner["contract"]
    salary = contract.split("/")[0]
    years = contract.split("/")[1]

    update_query = "UPDATE free_agency SET new_team = %s, contract_salary = %s, \
        contract_years = %s WHERE name = %s"
    cursor.execute(update_query, (team_name, salary, years, current_player[0]))

    conn.rollback()
    cursor.close()
    conn.close()


       

def choose_winner():
    sorted_offers = sorted(offers, key=lambda offer: offer['entries'], reverse=True)

    # Adds offers all offers that are tied for third place
    if len(sorted_offers) >= 3:
        min_offer_index = 2
    else:
        min_offer_index = len(sorted_offers)

    third_offer_entries = sorted_offers[min_offer_index-1]['entries']
    top_offers = [offer for offer in sorted_offers if offer['entries'] >= third_offer_entries]

    # Uses entries as random weight
    winner = random.choices(top_offers, weights=(offer["entries"] for offer in top_offers))[0]
    #update_new_contracts(winner[0])

    return {"winner": winner, "player": current_player}




# Gets column names from PostgresQL and inserts in data
def insert_column_names(cursor, data):
    column_names = [desc[0] for desc in cursor.description]
    data_with_column_names = []

    for item in data:
        data_dict = dict(zip(column_names, item))
        data_with_column_names.append(data_dict)

    return data_with_column_names


@app.route("/api/teams")
def get_teams():
    conn = get_conn()
    cursor = get_cursor(conn)

    cursor.execute(
        "SELECT * FROM teams ORDER BY teams.team_id"
    )

    teams = cursor.fetchall()
    teams = insert_column_names(cursor, teams)

    cursor.close()
    conn.close()

    return teams


@app.route("/api/schedule")
@app.route("/api/schedule/<season_id>")
@app.route("/api/schedule/<season_id>/<game_id>")
def get_schedule(season_id=None, game_id=None):
    conn = get_conn()
    cursor = get_cursor(conn)

    team_id = request.args.get("teamid")

    if season_id == "current-season":
        cursor.execute(
            schedule_query
            + " WHERE season_id = (SELECT MAX(season_id) FROM games) ORDER BY game_id"
        )

    elif "teamid" in request.args:
        cursor.execute(
            schedule_query
            + " WHERE season_id = %s AND (away_team_id = %s OR home_team_id = %s) ORDER BY game_id",
            (season_id, team_id, team_id),
        )

    elif season_id and game_id:
        cursor.execute(
            schedule_query + " WHERE season_id = %s AND game_id = %s",
            (season_id, game_id),
        )

    elif season_id:
        cursor.execute(
            schedule_query + " WHERE season_id = %s ORDER BY game_id", (season_id)
        )

    else:
        cursor.execute(schedule_query + " ORDER BY game_id")

    schedule = cursor.fetchall()

    seasonal_schedule_list = []
    schedules_list = []

    for game in schedule:
        seasonal_schedule_list.append(
            {
                "game_id": game[0],
                "season_id": game[1],
                "away_team_location": game[2],
                "away_team_name": game[3],
                "home_team_location": game[4],
                "home_team_name": game[5],
                "away_team_score": game[6],
                "home_team_score": game[7],
                "away_team_wins": game[8],
                "away_team_loss": game[9],
                "home_team_wins": game[10],
                "home_team_loss": game[11],
                "away_team_logo": game[12],
                "home_team_logo": game[13],
                "away_team_abb": game[14],
                "home_team_abb": game[15],
                "away_team_helmet": game[16],
                "home_team_helmet": game[17],
                "away_team_id": game[18],
                "home_team_id": game[19],
            }
        )
    schedules_list.append(seasonal_schedule_list)

    cursor.close()
    conn.close()

    return jsonify(seasonal_schedule_list)


@app.route("/api/home-standings")
def get_home_standings():
    conn = get_conn()
    cursor = get_cursor(conn)

    cursor.execute(home_standings_query)
    standings = cursor.fetchall()

    standings_json = []
    column_names = [cursor[0] for cursor in cursor.description]

    for team in standings:
        standings_json.append(dict(zip(column_names, team)))

    cursor.close()
    conn.close()

    return jsonify(standings_json)


@app.route("/api/standings")
def get_team_standings():
    conn = get_conn()
    cursor = get_cursor(conn)

    cursor.execute(standings_query)
    results = cursor.fetchall()

    team_standings_list = []
    current_season_id = None
    current_season_standings = []

    column_names = [desc[0] for desc in cursor.description]

    for row in results:
        if row[1] != current_season_id:
            if current_season_standings:
                team_standings_list.append(current_season_standings)
            current_season_id = row[1]
            current_season_standings = []

        current_season_standings.append(dict(zip(column_names, row)))

    if current_season_standings:
        team_standings_list.append(current_season_standings)

    cursor.close()
    conn.close()

    return team_standings_list


@app.route("/api/authorization/<user_id>")
def is_manager(user_id):
    conn = get_conn()
    cursor = get_cursor(conn)

    user_query = "SELECT * FROM teams WHERE manager_id = %s"
    cursor.execute(user_query, (user_id,))
    current_user = cursor.fetchone()

    if not current_user:
        return {"isManager": False}
    else:
        cursor.execute(
            "SELECT * from trade_offers WHERE (sending_team_id = %s OR receiving_team_id = %s) AND status = 'pending'",
            (
                current_user[0],
                current_user[0],
            ),
        )
        pending_trades = cursor.fetchone()

        if pending_trades is not None:
            pending_trades = "true"
        else:
            pending_trades = "false"

        cursor.close()
        conn.close()

        return {
            "isManager": True,
            "team_id": current_user[0],
            "team_location": current_user[1],
            "team_name": current_user[2],
            "pending_trades": pending_trades,
        }


@app.route("/")
def server():
    return send_from_directory(main.static_folder, "index.html")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    socketio.run(app, port=port, debug=True)