from flask import Flask, redirect, jsonify, request
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
CORS(app)
token = ""
client_id = '8b61f237d4a4396f139f'
listUsers = dict()

from requests.auth import AuthBase

class TokenAuth(AuthBase):
    """Implements a custom authentication scheme."""

    def __init__(self, token):
        self.token = token

    def __call__(self, r):
        """Attach an API token to a custom auth header."""
        r.headers['X-TokenAuth'] = f'{self.token}'  # Python 3.6+
        return r


@app.route("/")
def hello():
    return jsonify({'text': 'Hello World!'})

@app.route("/login")
def login():
    return redirect('https://github.com/login/oauth/authorize?client_id=' + client_id + '&scope=respo')


@app.route("/user/signin/callback")
def callbackGitHub():
    global token
    token = request.args['code']
    return redirect('http://localhost:4200', code=200, Response=None)


@app.route("/users/<username>")
def getUser(username):
    r = requests.get('https://api.github.com/search/users',
    params={'q': username + 'in:login'},
    auth=TokenAuth(token))
    return jsonify(r.text)

@app.route("/user/<username>")
def getUserByUserName(username):
    global listUsers
    r = requests.get('https://api.github.com/users/' + username,
    params={'client_id': '8b61f237d4a4396f139f','client_secret': 'd2bc6953c0d841d78f451a2f36824541726ed0f8'},
    auth=TokenAuth(token))
    listUsers[username] = jsonify(r.text)
    return jsonify(r.text)

@app.route("/localuser/<username>")
def getLocalUser(username):
    nonito = listUsers[username]
    return nonito


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True, use_reloader=True)
