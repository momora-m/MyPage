FROM postgres
COPY ./ddl/init.sh /docker-entrypoint-initdb.d/
COPY ./ddl/init.sql /tmp
COPY ./ddl/createTables.sql /tmp
COPY ./test-data/account.csv /tmp
COPY ./test-data/import.sql /tmp
EXPOSE 5432