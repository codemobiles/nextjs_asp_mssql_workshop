- dotnet EF
  + imcompatible version
  + localhost -> 127.0.0.1
- scaffold DatabaseContext (adapter)
  + access Database
  + Connection string [appsettings.json ...]
  + add Services (Program.cs)
  + add DatabaseContext Service (Manual)
    + builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionSQLServer")));
- DI (Dependency Injection)    
- Improve scalabiltiy and maintance by Installer 
  + Change manually add services to Installer 
- Installer
  + C# Extension - way to add more methods into existing class or interface
  + Installer uses [Assembly, C# Extension]  
  + DBInstaller
  + work flow - Program -> InstallerExtensions ->(loop)-> InstallServices function in each Installers
- DTO (Data Transfer Object)
  + Way to protect original data fields 
  + using Mapper : ex:  var user = _mapper.Map<User>(loginViewModel);
  + readme_mapper.md
  + data verification by attributes - https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-8.0
  + ex: [MinLength(8, ErrorMessage = "passwords must have at least 8 characters")]



