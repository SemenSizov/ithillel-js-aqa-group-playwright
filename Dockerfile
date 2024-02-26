FROM node:20-bookworm

RUN npx -y playwright@1.40.1 install --with-deps

RUN mkdir pw-tests

WORKDIR /pw-tests

COPY . /pw-tests

RUN npm ci

ENV USER_NAME=guest
ENV USER_PASS=welcome2qauto
ENV JOHN_EMAIL=john_doe@test.com
ENV JOHN_PASS=John_D0e
ENV HOST=https://qauto.forstudy.space/
ENV API_URL=https://qauto.forstudy.space/api

CMD ["npm", "test"]
