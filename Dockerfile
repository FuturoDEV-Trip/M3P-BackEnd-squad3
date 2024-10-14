FROM node:22-alpine AS dock

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine AS prod

COPY --from=dock /app/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 443