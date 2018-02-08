FROM node:latest
MAINTAINER Marcelo Ogeda
ENV NODE_ENV=development
COPY ./server/ /var/www
WORKDIR /var/www
RUN npm install
CMD ["npm", "start"]
EXPOSE 5000
