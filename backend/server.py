from flask import Flask
from flask_cors import CORS
import psycopg2
import os
from dotenv import load_dotenv


app = Flask(__name__)
CORS(app)

load_dotenv()


def get_conn():
    DB_HOST = os.getenv("DB_HOST")
    DB_NAME = os.getenv("DB_NAME")
    DB_USER = os.getenv("DB_USER")
    DB_PASS = os.getenv("DB_PASS")

    return psycopg2.connect(database=DB_NAME,
                        user=DB_USER,
                        password=DB_PASS,
                        host=DB_HOST)

def get_cursor(conn):
    return conn.cursor()

@app.route("/api/teams")
def test():
    conn = get_conn()
    cursor = get_cursor(conn)

    cursor.execute("SELECT * FROM teams ORDER BY team_id")
    
    teams = cursor.fetchall()
    
    # Get the column names from the cursor's description
    column_names = [desc[0] for desc in cursor.description]
    
    # Create a list of dictionaries, each representing a team with column names
    teams_with_column_names = []
    for team in teams:
        team_dict = dict(zip(column_names, team))
        teams_with_column_names.append(team_dict)
    
    return teams_with_column_names
