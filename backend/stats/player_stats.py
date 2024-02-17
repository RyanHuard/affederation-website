from flask import Blueprint, request, jsonify

from stats.player_stat_columns import player_stat_columns
from db_connection import get_conn, get_cursor


player_stats_blueprint = Blueprint("player_stats_blueprint", __name__)


# Gets column names from PostgresQL and inserts in data
def insert_column_names(cursor, data):
    column_names = [desc[0] for desc in cursor.description]
    data_with_column_names = []

    for item in data:
        data_dict = dict(zip(column_names, item))
        data_with_column_names.append(data_dict)

    return data_with_column_names


def get_team_stats_city(team_id):
    team_cities = ["ALA", "MEM", "SA", "STL", "KEN", "OK", "FAR", "ORL", "SHR", "SC"]
    return team_cities[int(team_id)]


@player_stats_blueprint.route("/api/stats/<season_id>")
def get_player_stats(season_id):
    conn = get_conn()
    cursor = get_cursor(conn)

    team_id = request.args.get("teamid")

    players_by_position = {}

    for position, query_info in player_stat_columns.items():
        selections = query_info["selections"]
        criteria = query_info["criteria"]
        categories = query_info["categories"]

        if "teamid" in request.args:
            criteria += f" AND team_city = '{get_team_stats_city(team_id)}'"

        query = f"""
    SELECT
        ps1.first_name,
        ps1.last_name,
        ps1.position,
        (
            SELECT team_city
            FROM player_stats AS ps2
            WHERE
                ps2.first_name = ps1.first_name
                AND ps2.last_name = ps1.last_name
                AND ps2.position = ps1.position
                AND ps2.season_id = 7
            ORDER BY ps2.game_id DESC
            LIMIT 1
        ) AS team,
        (
            SELECT team_logo
            FROM teams
            WHERE teams.abbreviation = (
                SELECT team_city
                FROM player_stats AS ps2
                WHERE
                    ps2.first_name = ps1.first_name
                    AND ps2.last_name = ps1.last_name
                    AND ps2.position = ps1.position
                    AND ps2.season_id = 7
                ORDER BY ps2.game_id DESC
                LIMIT 1
            )
        ) AS team_logo,
        {', '.join(selections)}
    FROM player_stats AS ps1
    WHERE
        {criteria}
        AND last_name <> 'One'
        AND last_name <> 'Two'
        AND last_name <> 'Three'
        AND last_name <> 'Five'
        AND season_id = %s
    GROUP BY last_name, first_name, position
"""
        cursor.execute(query, (season_id,))

        players = cursor.fetchall()
        players_json = []
        for player in players:
            players_json.append(dict(zip(categories, player)))

        players_by_position[position] = players_json

    return players_by_position


# Gets player info and all-time stats
@player_stats_blueprint.route("/api/player-info/<first_name>/<last_name>")
def get_player_info(first_name, last_name):
    conn = get_conn()
    cursor = get_cursor(conn)

    team_id = request.args.get("teamid")
    print(first_name, last_name)

    player_stats_by_position_and_season = {}  # Store player stats by position and season

    for position, query_info in player_stat_columns.items():
        selections = query_info["selections"]
        criteria = query_info["criteria"]
        categories = query_info["categories"]

        if "teamid" in request.args:
            criteria += f" AND team_city = '{get_team_stats_city(team_id)}'"

        players_by_season = {}  # Store player stats by season

        for season_id in range(8):  # Iterate through season IDs 0 to 6
            query = f"""
           SELECT first_name, last_name, position, team_city,
            (SELECT team_logo FROM teams WHERE
            teams.abbreviation = player_stats.team_city),
            {', '.join(selections)} FROM player_stats WHERE {criteria}
            AND first_name ILIKE %s AND last_name ILIKE %s AND season_id = %s
            GROUP BY pid, last_name, first_name, team_city, position, season_id
            """
            cursor.execute(
                query, (first_name.capitalize(), last_name.capitalize(), season_id)
            )

            players = cursor.fetchall()
            players_json = []
            for player in players:
                players_json.append(dict(zip(categories, player)))

            players_by_season[season_id] = players_json

        player_stats_by_position_and_season[position] = players_by_season

    player_info_query = """
        SELECT r.*
        FROM rosters r
        JOIN (
            SELECT fname, lname, MAX(CAST(season_id AS INT)) AS max_season_id
            FROM rosters
            GROUP BY fname, lname
        ) max_season ON r.fname = max_season.fname
        AND r.lname = max_season.lname
        AND CAST(r.season_id AS INT) = max_season.max_season_id
        WHERE r.fname ILIKE %s AND r.lname ILIKE %s
        """

    cursor.execute(player_info_query, (first_name.capitalize(), last_name.capitalize()))

    player_info = cursor.fetchone()

    column_names = [desc[0] for desc in cursor.description]

    player_info_json = {
        column_names[i]: str(player_info[i]) for i in range(len(column_names))
    }

    # This must be done because the tid on data sheet is in different order
    # than actual team ids
    if player_info_json["tid"] == "0":
        player_info_json["tid"] = 0
    elif player_info_json["tid"] == "1":
        player_info_json["tid"] = 6
    elif player_info_json["tid"] == "2":
        player_info_json["tid"] = 4
    elif player_info_json["tid"] == "3":
        player_info_json["tid"] = 1
    elif player_info_json["tid"] == "4":
        player_info_json["tid"] = 5
    elif player_info_json["tid"] == "5":
        player_info_json["tid"] = 7
    elif player_info_json["tid"] == "6":
        player_info_json["tid"] = 2
    elif player_info_json["tid"] == "7":
        player_info_json["tid"] = 8
    elif player_info_json["tid"] == "8":
        player_info_json["tid"] = 9
    elif player_info_json["tid"] == "9":
        player_info_json["tid"] = 3
    
    player_stats_by_position_and_season["player_info"] = player_info_json

    return jsonify(player_stats_by_position_and_season)
