# new project (method 1)

dotnet new webapi --use-controllers -o backend
dotnet new webapi -o WebApi

dotnet run
dotnet run --launch-profile http
dotnet run --launch-profile https
dotnet run --launch-profile "<target_profile>"

# new project (method 2)

# using vscode dotnet cmd

code --install-extension matijarmk.dotnet-core-commands

# restore master datbase "data/database.sql"

# add required database handler packages

- dotnet add package Microsoft.EntityFrameworkCore.Design
- dotnet add package Microsoft.EntityFrameworkCore.SqlServer
- dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
- dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
- dotnet add package Microsoft.AspNetCore.Mvc.Versioning
- dotnet add package Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer
- dotnet add package Serilog.Extensions.Logging.File
- dotnet add package Autofac.Extensions.DependencyInjection
- dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection

# install dotnet-ef

dotnet tool install --global dotnet-ef
dotnet tool update --global dotnet-ef
dotnet tool uninstall --global dotnet-ef
dotnet-ef --version

# work on both window and mac

dotnet ef dbcontext scaffold "Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=demopos;" Microsoft.EntityFrameworkCore.SqlServer -o Models -c DatabaseContext --context-dir Database

# change authentication from hardcode to json

# change port for auto launch

- launchSettings.json
  "applicationUrl": "https://localhost:8082;http://localhost:8081",

# static file

- Program.cs + wwwroot
  app.UseStaticFiles();

# kill all dotnet process

killall -9 dotnet

# Enable ssl

---

mac: sudo dotnet dev-certs https --trust
windows: dotnet dev-certs https --trust
