# appsettings.Development.json
"Logging": {
    "LogLevel": {
      "Default": "Debug",
      "System": "None",
      "Microsoft": "None"
    }
  }


# .vscode/launch.json
"justMyCode": true, // You can change to false if you wanna debug 3rd-party code
      "logging": {
        "moduleLoad": false
      },  



# Logging file
(<project>.csproj)
- <PackageReference Include="Serilog.Extensions.Logging.File" Version="3.0.0" />
(Program.cs)
- // Write log file
builder.Host.ConfigureLogging((hostingContext, builder) =>{builder.AddFile("Logs/cmpos_api-{Date}.txt", LogLevel.Debug, null, false, null, null);});