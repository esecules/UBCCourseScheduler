FROM ubuntu:12.04

# Environment variables
ENV INSTALL /opt/proxy
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock
ENV APACHIE_PID_FILE /var/run/apache2

# ports
EXPOSE 80

# install dependencies
RUN apt-get update && apt-get install -y \
    apache2 \
    curl
RUN apt-get install -y libapache2-mod-proxy-html
RUN apt-get install libxml2-dev
RUN a2enmod proxy proxy_http

# Remove Downloaded Archives
RUN apt-get clean

# copy files to image
COPY conf $INSTALL/conf/
COPY scripts $INSTALL/scripts/

RUN chown www-data:www-data -R $INSTALL
RUN cp $INSTALL/conf/supervisor.conf /etc/
RUN rm -f /etc/apache2/sites-enabled/000-default
RUN ln -sf $INSTALL/conf/apache.conf /etc/apache2/sites-available/proxy

CMD $INSTALL/scripts/run.sh
