FROM node:9.10.1

COPY ./index.js ./index.js

EXPOSE 3000

ENV MESSAGE="Hello World!"

CMD ["node", "index.js"]
