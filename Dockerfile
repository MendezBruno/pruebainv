# STEP 1 build static website

FROM node:alpine as builder
RUN apk update && apk add --no-cache make git

WORKDIR /app

COPY . /app

RUN cd /app/favoGitClient && npm set progress=false && npm install && npm run build

from alpine:latest

RUN apk add --no-cache python3-dev \
    && pip3 install --upgrade pip

WORKDIR /app

RUN pip3 --no-cache-dir install -r requeriments.txt

EXPOSE 5000

ENTRYPOINT ["python3"]

CMD ["app.py"]