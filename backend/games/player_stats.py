from flask import Blueprint

import json

from games.player_stat_columns import player_stat_columns
from db_connection import get_conn, get_cursor

game_stats_blueprint = Blueprint("game_stats_blueprint", __name__)


@game_stats_blueprint.route("/api/stats/<season_id>/<game_id>")
def get_player_stats(season_id, game_id):
    conn = get_conn()
    cursor = get_cursor(conn)

    # Group players by team and position
    players_by_team_position = {}

    for position, query_info in player_stat_columns.items():
        selections = query_info["selections"]
        criteria = query_info["criteria"]
        categories = query_info["categories"]

        query = f"SELECT CONCAT(first_name, ' ', last_name), team_city, \
            {', '.join(selections)} FROM player_stats WHERE {criteria} AND last_name <> 'One' AND last_name <> 'Two' AND last_name <> 'Three' AND last_name <> 'Five' \
                AND season_id = %s AND game_id = %s GROUP BY pid, last_name, first_name, team_city, position "
        cursor.execute(query, (season_id, game_id))

        players = cursor.fetchall()
        players_json = []
        for player in players:
            players_json.append(dict(zip(categories, player)))

        # Store players' stats for each team by position
        for player in players_json:
            team_city = player['team']
            if team_city not in players_by_team_position:
                players_by_team_position[team_city] = {position: [player]}
            else:
                if position not in players_by_team_position[team_city]:
                    players_by_team_position[team_city][position] = [player]
                else:
                    players_by_team_position[team_city][position].append(player)

    return players_by_team_position
