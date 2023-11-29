version: '3.5'

services:
  database:    
    # image: mcr.microsoft.com/mssql/server:2022-latest (for intel)
    # image: mcr.microsoft.com/azure-sql-edge (for apple sillicon)
    image: mcr.microsoft.com/azure-sql-edge
    container_name: my_database            
    environment:
      SA_PASSWORD: Mflv[Mflv[
      ACCEPT_EULA: Y
    volumes:
      - ./data:/scripts/
      - cmdatabse-volume:/var/opt/mssql
    command:
      - /bin/bash
      - -c
      - |
        # Launch MSSQL and send to background
        /opt/mssql/bin/sqlservr &

        # (Method1) Wait 30 seconds for it to be available
        # (lame, I know, but there's no nc available to start prodding network ports)
        # sleep 30

        # (Method2) Wait for it to be available
        echo "Waiting for MS SQL to be available ⏳"
        /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P $$SA_PASSWORD -Q "SET NOCOUNT ON SELECT \"Database Available\""
        is_up=$$?
        while [ $$is_up -ne 0 ] ; do
          echo -e $$(date)
          /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P $$SA_PASSWORD -Q "SET NOCOUNT ON SELECT \"Database Available\""
          is_up=$$?
          sleep 5
        done

        # https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/connecting-with-bcp?view=sql-server-ver15
        # https://docs.microsoft.com/en-us/sql/tools/bcp-utility?redirectedfrom=MSDN&view=sql-server-ver15
        # /opt/mssql-tools/bin/sqlcmd -l 30 -S localhost -h-1 -V1 -U sa -P $$SA_PASSWORD -Q "SET NOCOUNT ON SELECT \"Database Available\" , @@servername"

        # Run every script in /scripts
        # Set a flag so that this is only done once on creation,
        # and not every time the container runs
        for foo in /scripts/*.sql
          do /opt/mssql-tools/bin/sqlcmd -U sa -P $$SA_PASSWORD -i $$foo
          #  do /opt/mssql-tools/bin/sqlcmd -U sa -P $$SA_PASSWORD -l 30 -e -i $$foo
        done

        # So that the container doesn't shut down, sleep this thread
        sleep infinity
    ports:
      - 1433:1433
    networks:
      - mynetwork
  backend:
    build: backend/
    image: backend:1.0
    container_name: backend
    volumes:
        - cmdotnet-volume:/app/wwwroot
    ports:
      - 8081:8081
    depends_on:
      - database
    networks:
      - mynetwork
  frontend:
    build: frontend/
    image: frontend:1.0
    container_name: frontend
    ports:
      - 80:80
    depends_on:
      - backend
    networks:
      - mynetwork

networks:
  mynetwork:
    name: pos_workshop
    driver: bridge

volumes:
    cmdotnet-volume:
        external: false
    cmdatabse-volume:
        external: false    


