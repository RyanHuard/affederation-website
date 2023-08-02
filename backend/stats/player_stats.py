from flask import Blueprint, request

from stats.player_stat_columns import player_stat_columns
from db_connection import get_conn, get_cursor

player_stats_blueprint = Blueprint("player_stats_blueprint", __name__)

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

        query = f"SELECT first_name, last_name, position, team_city, (SELECT team_logo from TEAMS where teams.abbreviation = player_stats.team_city), \
            {', '.join(selections)} FROM player_stats WHERE {criteria} AND last_name <> 'One' AND last_name <> 'Two' AND last_name <> 'Three' AND last_name <> 'Five' \
                AND season_id = %s GROUP BY pid, last_name, first_name, team_city, position"
        cursor.execute(query, (season_id,))

        players = cursor.fetchall()
        players_json = []
        for player in players:
            players_json.append(dict(zip(categories, player)))

        players_by_position[position] = players_json

    return players_by_position
