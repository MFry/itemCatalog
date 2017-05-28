from flask import jsonify


def create_json(query):
    results = []
    for row in query:
        results.append(row.serialize)
    return jsonify(results)
