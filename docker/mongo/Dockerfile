FROM mongo:latest
COPY ./mongojs/createUser.js /docker-entrypoint-initdb.d/
COPY ./mongojs/import.sh /docker-entrypoint-initdb.d/
COPY ./test-data/ /tmp/
CMD ["mongod","--auth"]