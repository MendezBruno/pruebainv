from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return jsonify({'text':'Hello World!'})

@app.route("/user/signin/callback")
def callbackGitHub():
    return jsonify(request.args)


if __name__ == '__main__':
     app.run(port=9000)