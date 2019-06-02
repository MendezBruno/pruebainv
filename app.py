from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
CORS(app)
token = ""

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


@app.route("/user/signin/callback")
def callbackGitHub():
    global token
    token = request.args['code']
    return jsonify(request.args)


@app.route("/users/<username>")
def getUser(username):
    #requests.get('https://httpbin.org/get', auth=TokenAuth('12345abcde-token'))
    r = requests.get('https://api.github.com/search/users',
    params={'q': username},
    auth=TokenAuth(token))
    return jsonify(r.text)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True, use_reloader=True)
