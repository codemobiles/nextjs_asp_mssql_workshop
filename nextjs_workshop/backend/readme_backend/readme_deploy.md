# docker

docker build -t cmapi .  
docker run -d --name test -p 8081:8081 cmapi
docker network ls
docker inspect bridge (find using-container)

# udpate appsettings.json (database server connection url)

from:
"ConnectionSQLServer": "Server=localhost,1433;...."

to:
"ConnectionSQLServer": "Server=172.17.0.2,1433;...."

# shell

docker exec -it test bash
cat appsettings.json

# deploy in production

## https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/?view=aspnetcore-6.0

# run this command to generate production build files

# UseAppHost=true : to generate exe file - you start the app from the exe file direct

# UseAppHost=false : to generate dll file - you must start via "dotnet <project.dll>"

dotnet publish -c Release -o ./publish /p:UseAppHost=true

# set running port in production

### for mac

export ASPNETCORE_URLS=http://+:8081

### for win

set ASPNETCORE_URLS=http://+:8081

# run the execution file

publish/backend

# dev deploy angular

npx serve -p 81 -s dist/mea-posme
