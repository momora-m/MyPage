authDB=admin
dbName=myappdb
username=root
password=root

for file in ` find /tmp/jsonArrays/* -maxdepth 0 -type f`
do
    filename=` basename $filename `
    mongoimport --db $dbName --collection $filename --authenticationDatabase $authDB --username $username --password $password --drop --file $file --jsonArray