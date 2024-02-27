from flask import Blueprint, request, jsonify
from datetime import datetime
import os
from PIL import Image

from db_connection import get_conn, get_cursor

publish_articles_blueprint = Blueprint("publish_articles_blueprint", __name__)

UPLOAD_FOLDER = "../public/article_thumbnails/"


@publish_articles_blueprint.route("/api/recent-articles")
def get_recent_articles():
    conn = get_conn()
    cursor = get_cursor(conn)

    article_query = "SELECT * FROM articles ORDER BY article_id DESC LIMIT 4"
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


@publish_articles_blueprint.route("/api/articles/publish", methods=["POST"])
def publish_article():
    conn = get_conn()
    cursor = get_cursor(conn)

    author = request.form.get("author")
    title = request.form.get("title")
    content = request.form.get("content")
    thumbnail = request.files.get("thumbnail")

    img = Image.open(thumbnail)
    width, height = img.size
    if width > 4000 or height > 4000:
        return (
            jsonify(
                {"error":
                 "Image resolution exceeds the maximum allowed resolution."}
            ),
            400,
        )

    aspect_ratio = width / height
    if abs(aspect_ratio - (16 / 9)) > 0.05:  # Allows some uncertainty]
        return jsonify({"error": "Image aspect ratio must be 16:9."}), 400

    # Fixes issue with file being corrupted
    thumbnail.seek(0)
    thumbnail.save(os.path.join(UPLOAD_FOLDER, thumbnail.filename))

    publish_date = datetime.now()

    publish_query = """INSERT INTO articles (author, title, content,
                    publish_date, thumbnail_url) VALUES (%s, %s, %s, %s, %s)"""

    cursor.execute(
        publish_query, (author, title, content,
                        publish_date, thumbnail.filename)
    )
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"success": True}, 200)
