from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import os
from dotenv import load_dotenv

from queries.schedule import schedule_query
from queries.home_standings import home_standings_query


app = Flask(__name__)
CORS(app)

load_dotenv()


def get_conn():
    DB_HOST = os.getenv("DB_HOST")
    DB_NAME = os.getenv("DB_NAME")
    DB_USER = os.getenv("DB_USER")
    DB_PASS = os.getenv("DB_PASS")

    return psycopg2.connect(
        database=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST
    )


def get_cursor(conn):
    return conn.cursor()


# Gets column names from PostgresQL and inserts in data
def insert_column_names(cursor, data):
    column_names = [desc[0] for desc in cursor.description]
    data_with_column_names = []

    for item in data:
        data_dict = dict(zip(column_names, item))
        data_with_column_names.append(data_dict)

    return data_with_column_names


@app.route("/api/teams")
def test():
    conn = get_conn()
    cursor = get_cursor(conn)

    cursor.execute("SELECT * FROM teams ORDER BY team_id")

    teams = cursor.fetchall()
    teams = insert_column_names(cursor, teams)

    cursor.close()
    conn.close()

    return teams


@app.route("/api/schedule")
@app.route("/api/schedule/<season_id>")
def get_schedule(season_id=None):
    conn = get_conn()
    cursor = get_cursor(conn)

    if season_id == "current-season":
        cursor.execute(
            schedule_query
            + " WHERE season_id = (SELECT MAX(season_id) FROM games) ORDER BY game_id"
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

    return jsonify(standings_json)