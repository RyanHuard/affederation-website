from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import os

from db_connection import get_conn, get_cursor

from queries.schedule import schedule_query
from queries.home_standings import home_standings_query
from queries.standings import standings_query

from stats.player_stats import player_stats_blueprint
from games.player_stats import game_stats_blueprint
from teams.team_stats import team_stats_blueprint
from articles.publish import publish_articles_blueprint


app = Flask(__name__, static_folder="../dist", static_url_path="")
app.register_blueprint(player_stats_blueprint)
app.register_blueprint(game_stats_blueprint)
app.register_blueprint(team_stats_blueprint)
app.register_blueprint(publish_articles_blueprint)

CORS(app)


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


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)