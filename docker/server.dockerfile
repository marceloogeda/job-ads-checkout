FROM node:latest
MAINTAINER Marcelo Ogeda
ENV NODE_ENV=development
COPY ./server/ /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 5000
