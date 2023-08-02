from flask import Blueprint

from db_connection import get_conn, get_cursor

team_stats_blueprint = Blueprint("team_stats_blueprint", __name__)


# Gets column names from PostgresQL and inserts in data
def insert_column_names(cursor, data):
    column_names = [desc[0] for desc in cursor.description]
    data_with_column_names = []

    for item in data:
        data_dict = dict(zip(column_names, item))
        data_with_column_names.append(data_dict)

    return data_with_column_names


def get_team_city(team_id):
    team_cities = ["ALA", "MEM", "SA", "STL", "KEN", "OK", "FAR", "ORL", "SHR", "SC"]

    return team_cities[int(team_id)]


@team_stats_blueprint.route("/api/teams/<team_id>/stats/<season_id>")
def get_team_stats(team_id, season_id):
    conn = get_conn()
    cursor = get_cursor(conn)

    team_city = get_team_city(team_id)

    offense_query = "SELECT (AVG(match_pass_yards)*53 + AVG(match_rush_yards)*53) AS yards_per_game,\
        AVG(match_pass_yards)*53 AS pass_yards_per_game, AVG(match_rush_yards)*53 AS rush_yards_per_game,\
        team_standings.points_for/(team_standings.wins + team_standings.loss) AS points_per_game FROM player_stats\
        JOIN team_standings\
        ON team_standings.stats_team_city = player_stats.team_city\
        WHERE player_stats.season_id = %s\
        AND team_standings.season_id = %s\
        AND player_stats.team_city = %s\
        GROUP BY team_standings.points_for, team_standings.wins, team_standings.loss"

    cursor.execute(
        offense_query,
        (season_id, season_id, team_city),
    )

    offense_stats = cursor.fetchone()

    defense_query = "SELECT (AVG(match_pass_yards)*53 + AVG(match_rush_yards)*53),\
        AVG(match_pass_yards)*53, AVG(match_rush_yards)*53, \
        (SELECT points_against/(team_standings.wins + team_standings.loss) FROM team_standings\
        WHERE stats_team_city = %s AND season_id = %s) AS points_against\
        FROM player_stats\
        JOIN team_standings\
        ON team_standings.stats_team_city = %s\
        WHERE player_stats.season_id = %s\
        AND player_stats.team_city != %s\
        GROUP BY team_standings.points_against\
        LIMIT 1"

    cursor.execute(
        defense_query, (team_city, season_id, team_city, season_id, team_city)
    )

    defense_stats = cursor.fetchone()

    return {"offense": offense_stats, "defense": defense_stats}
