https://www.youtube.com/watch?v=yMDQroitWPs

# .net docker image
https://hub.docker.com/_/microsoft-dotnet-aspnet

docker ps
docker build -t cmapi .  
docker run -d --name cmapp -p 8081:8081 cmapi
docker network ls
docker inspect bridge (find using-container to update db network url)

# in appsettings.json

"ConnectionSQLServer": "Server=172.17.0.2,1433;user id=sa; password=Mflv[Mflv[; Database=demopos;"

# join bride network from docker-compose

# up with docker-compose (cmapp is the container name)

docker-compose -p cmapp up --build -d

# one shot

docker stop cmapp-backend-1 && docker rm cmapp-backend-1 && docker-compose -p cmapp up --build -d
