# resutl of this configuration will allow to select api version in swagger

[ApiVersion("1.0")]
[ApiController]
[Route("api/v{version:apiVersion}/[controller]")]

# Add Versioning Installer and packages

- dotnet add package Microsoft.AspNetCore.Mvc.Versioning
- dotnet add package Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer
- add VersioningInstaller.cs

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

- Add show jwt authorization in swagger ui form

# Add XML comments in .csproj file (otherwise will cause error exception in SwaggerInstaller when load xml file)

<!-- BEGIN: XML comments for Swashbuckle -->

<GenerateDocumentationFile>true</GenerateDocumentationFile>
<NoWarn>$(NoWarn);1591</NoWarn>

<!-- END: XML comments for Swashbuckle -->
