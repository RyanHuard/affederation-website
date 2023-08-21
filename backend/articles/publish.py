from flask import Blueprint

import json

from db_connection import get_conn, get_cursor

publish_articles_blueprint = Blueprint("publish_articles_blueprint", __name__)


@publish_articles_blueprint.route("/api/recent-articles")
def get_recent_articles():
    conn = get_conn()
    cursor = get_cursor(conn)

    article_query = "SELECT * FROM articles ORDER BY article_id DESC"
    cursor.execute(article_query)

    articles_fetch = cursor.fetchall()

    articles = []

    for article in articles_fetch:
        articles.append(
            {
                "article_id": article[0],
                "author": article[1],
                "title": article[2],
                "content": article[3],
                "publish_date": article[4],
                "thumbnail_url": article[5],
            }
        )

    return articles


@publish_articles_blueprint.route("/api/articles/<article_id>")
def get_article_by_id(article_id):
    conn = get_conn()
    cursor = get_cursor(conn)

    article_query = "SELECT * FROM articles WHERE article_id = %s"
    cursor.execute(article_query, (article_id))

    article = cursor.fetchone()

    return {
        "article_id": article[0],
        "author": article[1],
        "title": article[2],
        "content": article[3],
        "publish_date": article[4],
        "thumbnail_url": article[5],
    }
