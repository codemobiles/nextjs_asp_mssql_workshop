https://gist.github.com/iBlurBlur/f3fda898164f8db0c0da619e2d731098

- setup ms-sql docker
- intel:

  - https://hub.docker.com/_/microsoft-mssql-server
  - docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Mflv[Mflv[" -p 1433:1433 --name mssql-server -d mcr.microsoft.com/mssql/server:2022-latest

- macM1

  - https://hub.docker.com/_/microsoft-azure-sql-edge
  - docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=Mflv[Mflv[' -p 1433:1433 --name azure-sql-edge -d mcr.microsoft.com/azure-sql-edge

  ### with docker volume

  - docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=Mflv[Mflv[' -p 1433:1433 --name azure-sql-edge -d -v nextjs-asp-mssql_cmdatabse-volume:/var/opt/mssql mcr.microsoft.com/azure-sql-edge

- Using `mssql extension`
- Restore Database

# install dotnet-ef

dotnet tool install --global dotnet-ef
dotnet tool update --global dotnet-ef
dotnet tool uninstall --global dotnet-ef
dotnet-ef --version

# work on both window and mac

# Update cspro from true to false - to avoid error "Only the invariant culture is supported in globalization-invariant mode."

<InvariantGlobalization>false</InvariantGlobalization>

dotnet ef dbcontext scaffold "Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=demopos; TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -o Models -c DatabaseContext --context-dir Database

# nuget command lines

- dotnet command-line

# required packages to add into the <project>.csproj

- https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Design/

- Microsoft.EntityFrameworkCore.Design | dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.10
- Microsoft.EntityFrameworkCore.SqlServer | dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 6.0.10

- run again
  <InvariantGlobalization>false</InvariantGlobalization>

  dotnet ef dbcontext scaffold "Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=istock; TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -o Entities -c DatabaseContext --context-dir Data

# check dotnet sdk folder

- which/where dotnet
- dotnet --list-sdks
- defaultis : /usr/local/share/dotnet/sdk

# warning

To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.

optionsBuilder.UseSqlServer("Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=istock;");

# Program.cs

using Microsoft.EntityFrameworkCore;
builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionSQLServer")));

# Load all Repository

builder.Host.ConfigureContainer<ContainerBuilder>(builder =>
{
builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
.Where(t => t.Name.EndsWith("Repository"))
.AsImplementedInterfaces();
});
