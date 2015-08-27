#! /usr/bin/env bash
NAME=course-scheduler/proxy
TAG=0.0.1

docker rmi "$NAME:$TAG"

docker build -t="$NAME:$TAG" .
