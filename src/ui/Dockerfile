FROM ubuntu:trusty
MAINTAINER esecules@gmail.com

ENV INSTALL /opt/course-scheduler
ENV WEB_ROOT /var/www
ENV CFG /etc/apache2

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

COPY cfg/course-scheduler $CFG/sites-available/
COPY scripts/ $INSTALL/scripts/
RUN rm -f /etc/apache2/sites-enabled/000-default.conf
RUN rm -f /etc/apache2/sites-available/000-default.conf
COPY CourseScheduler $WEB_ROOT

RUN chown www-data:www-data -R $WEB_ROOT $INSTALL $CFG/sites-available

EXPOSE 80

CMD $INSTALL/scripts/run.sh
