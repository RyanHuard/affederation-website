# from flask import Blueprint, jsonify
# from server import socketio
# from flask_socketio import emit

# from db_connection import get_conn, get_cursor

# free_agency_blueprint = Blueprint("free_agency_blueprint", __name__)

# @free_agency_blueprint.route("/api/free-agents")
# def get_free_agents():
#     conn = get_conn()
#     cursor = get_cursor(conn)

#     query = "SELECT * FROM free_agency ORDER BY overall DESC"

#     cursor.execute(query)
#     free_agents = cursor.fetchall()
#     free_agents_json = []
#     column_names = [cursor[0] for cursor in cursor.description]

#     for player in free_agents:
#         free_agents_json.append(dict(zip(column_names, player)))
    
#     cursor.close()
#     conn.close()

#     return jsonify(free_agents_json)

# @socketio.on("connect")
# def handle_connect():
#     print("Connected")
#     emit("connect")

# @socketio.on("disconnect")
# def handle_disconnect():
#     print("Client has disconnected")
#     emit("disconnect")


# @socketio.on("message")
# def handle_offer(data):
#     print("offer: " + data)