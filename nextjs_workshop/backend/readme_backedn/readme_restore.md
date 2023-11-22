- install docker
- run db container

# db for intel
 - https://hub.docker.com/_/microsoft-mssql-server
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Mflv[Mflv[" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest  

# db for apple sillicon
 - https://hub.docker.com/_/microsoft-azure-sql-edge
 docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=Mflv[Mflv[' -p 1433:1433 --name azuresqledge -d mcr.microsoft.com/azure-sql-edge

# install ms-mssql vscode extension and define connection
 code --install-extension ms-mssql.mssql
 username: sa
 password: Mflv[Mflv[


# import master data by ms-sql vscode extension
use ms /z_SQL/database.sql

# dotnet run 
# open swagger ()
https://localhost:8081/swagger/index.html
http://localhost:8082/swagger/index.html

