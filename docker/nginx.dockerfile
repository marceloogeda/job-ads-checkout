FROM nginx:latest
MAINTAINER Marcelo Ogeda
COPY ./client/build /var/www/public
COPY ./docker/config/ngnix.conf /etc/nginx/nginx.conf
RUN chmod 755 -R /var/www/public
EXPOSE 80 443
ENTRYPOINT ["nginx"]
# Parametros extras para o entrypoint
CMD ["-g", "daemon off;"]
