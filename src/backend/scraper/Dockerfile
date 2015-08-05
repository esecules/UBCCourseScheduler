FROM ubuntu:12.04

# Environment variables
ENV INSTALL /opt/scraper

# ports
EXPOSE 80

# install dependencies
RUN apt-get update && apt-get install -y \
    python-dev \
    python-pip \
    apache2 \
    libapache2-mod-wsgi \
    curl

# Remove Downloaded Archives
RUN apt-get clean

# copy files to image
COPY conf $INSTALL/conf/
COPY python $INSTALL/python/
COPY scripts $INSTALL/scripts/
COPY requirements.txt /tmp/

RUN touch /var/log/scraper.log
RUN pip install -r /tmp/requirements.txt
RUN chown www-data:www-data -R $INSTALL
RUN cp $INSTALL/conf/supervisor.conf /etc/
RUN rm -f /etc/apache2/sites-enabled/000-default
RUN ln -sf $INSTALL/conf/apache.conf /etc/apache2/sites-available/scraper

CMD $INSTALL/scripts/run.sh
