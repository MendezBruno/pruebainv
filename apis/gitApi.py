from flask import jsonify, request
from flask_restful import Resource, Api
from app import app

restGitHub = Api(app)

@app.route("/")
def hello():
    return jsonify({'text':'Hello World!'})

@app.route("/user/signin/callback")
def callbackGitHub():
    return jsonify(request.args)