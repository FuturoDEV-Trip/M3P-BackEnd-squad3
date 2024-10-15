FROM node:22-alpine 

WORKDIR /app

COPY . .
ENV PORT_ENV=3000

RUN npm install

CMD [ "npm", "start" ]

FROM alpine 

COPY /app /usr/share/nginx/html

EXPOSE 80
EXPOSE 443