FROM node:alpine3.18

ARG BASE_DIR

WORKDIR /build

COPY ${BASE_DIR}/package.json .

RUN npm install

COPY ${BASE_DIR}/. .

RUN npm

CMD ["npm", "start"]
