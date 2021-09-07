FROM node:13.11.0-alpine3.11

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.2.0

COPY ./.env  /home/node/app
COPY ./package.json  /home/node/app
COPY ./tsconfig.build.json  /home/node/app
COPY ./.docker  /home/node/app/.docker
COPY ./dist  /home/node/app/dist
COPY ./node_modules  /home/node/app/node_modules
COPY ./yarn.lock  /home/node/app

USER node

WORKDIR /home/node/app
