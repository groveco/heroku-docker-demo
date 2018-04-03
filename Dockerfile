FROM node:9.10.1

COPY ./index.js ./index.js

EXPOSE 3000

ENV MESSAGE="foo bar"

CMD ["node", "index.js"]
