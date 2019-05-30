import requests

#Client ID
#   8b61f237d4a4396f139f
#Client Secret
#   d2bc6953c0d841d78f451a2f36824541726ed0f8
client_id = '8b61f237d4a4396f139f'
client_secret = 'd2bc6953c0d841d78f451a2f36824541726ed0f8'


if __name__ == '__main__':

    urlSignin = 'https://github.com/login/oauth/authorize?client_id=8b61f237d4a4396f139f&scope=respo'
    response = requests.get(urlSignin)

    if response.status_code == 200:
        print(response.content)
        code = response.content.code

def getAccesToke():

    urlToToken = 'https://github.com/login/oauth/access_token'
    payload = {'client_id': client_id, 'client_secret': client_secret, 'code': code }
    headers = {'Accept': 'application/json'}

    response = requests.post(urlToToken, json=payload, hearders=headers)

    if response.status_code == 200: 
        response_json = response.json()

        access_token = response_json['access_token']
        print(access_token)