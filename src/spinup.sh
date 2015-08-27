#! /usr/bin/env bash

docker run --name scraper -d -p 8083:80 course-scheduler/scraper:0.0.1
docker run --name ui -d -p 8082:80 course-scheduler/ui:0.0.1
docker run --link scraper:scraper --link ui:ui --name proxy -d -p 8080:80 course-scheduler/proxy:0.0.1
