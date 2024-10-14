FROM node:22-alpine AS dock

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "start" ]

FROM nginx:alpine AS prod

COPY --from=dock /app /usr/share/nginx/html

EXPOSE 80
EXPOSE 443