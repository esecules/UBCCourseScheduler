FROM ubuntu:trusty
MAINTAINER esecules@gmail.com

# This is a guess
ENV WEB_ROOT /var/www-data

# Mount the webroot to your local file system if you want to and
# you can deploy from web storm directly to the container without rebuilding
VOLUME $WEB_ROOT

RUN apt-get update && \
    apt-get install -y apache2 curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock

# TODO: Uncomment below and add the name of the web directory to copy to the webroot
#COPY <NAME_OF_WEB_DIRECTORY> $WEB_ROOT

EXPOSE 80

CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"]