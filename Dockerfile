FROM node:16-alpine

COPY ./ /nodejs/

WORKDIR /nodejs

RUN echo $(ls -l /nodejs/)

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]
