import os
from dotenv import load_dotenv
import psycopg2

load_dotenv()

def get_conn():
    DB_HOST = os.getenv("DB_HOST")
    DB_NAME = os.getenv("DB_NAME")
    DB_USER = os.getenv("DB_USER")
    DB_PASS = os.getenv("DB_PASS")

    # DB_HOST = os.environ.get("DB_HOST")
    # DB_NAME = os.environ.get("DB_NAME")
    # DB_USER = os.environ.get("DB_USER")
    # DB_PASS = os.environ.get("DB_PASS")

    return psycopg2.connect(
        database=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST
    )


def get_cursor(conn):
    return conn.cursor()
