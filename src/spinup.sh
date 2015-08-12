#! /usr/bin/env bash

docker run --name scraper -d course-scheduler/scraper:0.0.1
docker run --name redis -d redis
docker run --link scraper:scraper --link redis:redis --name ui -d -p 8080:80 course-scheduler/ui:0.0.1
