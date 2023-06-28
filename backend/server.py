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