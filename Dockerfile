FROM node:16-alpine

COPY ./ /nodejs/

WORKDIR /nodejs/src

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]
