from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return jsonify({'text':'Hello World!'})

@app.route("/user/signin/callback")
def callbackGitHub():
    return jsonify(request.args)

@app.route("/users")
def getUser():
    r = requests.get('https://github.com/users')
    return r.status_code


if __name__ == '__main__':
     app.run(host="0.0.0.0",port=5000,debug=True,use_reloader=True)