FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY services/frontend/public /usr/share/nginx/html

EXPOSE 80
