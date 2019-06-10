# STEP 1 build static website
FROM node:alpine as builder

RUN apk add --no-cache python3-dev \
    && pip3 install --upgrade pip

WORKDIR /app

COPY . /app

RUN ls

RUN pip3 --no-cache-dir install -r requeriments.txt


RUN apk update && apk add --no-cache make git

WORKDIR /app

RUN ls

RUN cd /app/favoGitClient && npm set progress=false && npm install && npm run build


EXPOSE 5000

ENTRYPOINT ["python3"]

CMD ["app.py"]
