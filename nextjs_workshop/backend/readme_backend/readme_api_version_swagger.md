# resutl of this configuration will allow to select api version in swagger

[ApiVersion("1.0")]
[ApiController]
[Route("api/v{version:apiVersion}/[controller]")]

# Add Versioning Installer and packages

- dotnet add package Microsoft.AspNetCore.Mvc.Versioning
- dotnet add package Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer
- add VersioningInstaller.cs and Make sure define SwaggerDoc every versions

```cs
c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "CodeMobiles .NETCore", Version = "1.0" });
c.SwaggerDoc("v2", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "CodeMobiles .NETCore", Version = "2.0" });
```

# Add SwaggerInstaller

- This installer will make controller able to show summary and comment in swagger
  var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
  var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
  c.IncludeXmlComments(xmlPath);

# Add ControllerInstaller.cs

- This will handle vesion based on controller namespace

```cs
c.Conventions.Add(new ApiExplorerGroupPerVersionConvention())
```

# Add more endpoint in Program.cs (This will make the right version filter to show more versions)

```cs
app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "CodeMobile API V1");
        c.SwaggerEndpoint("/swagger/v2/swagger.json", "CodeMobile API V2");
    });
```

- Add show jwt authorization in swagger ui form

# Add XML comments in .csproj file (otherwise will cause error exception in SwaggerInstaller when load xml file)

<!-- BEGIN: XML comments for Swashbuckle -->

<GenerateDocumentationFile>true</GenerateDocumentationFile>
<NoWarn>$(NoWarn);1591</NoWarn>

<!-- END: XML comments for Swashbuckle -->
