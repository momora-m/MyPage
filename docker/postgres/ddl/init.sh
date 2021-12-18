#!/bin/bash
psql -U myapp -f /tmp/init.sql
psql -U chatapp -d chatappdb -f /tmp/createTables.sql
psql -U chatapp -d chatappdb -f /tmp/import.sql