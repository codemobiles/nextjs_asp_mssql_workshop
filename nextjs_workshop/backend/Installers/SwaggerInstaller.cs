using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace backend.Installers
{
    public class SwaggerInstaller : IInstaller
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddSwaggerGen(c =>
            {

                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "CodeMobiles .NETCore", Version = "1.0" });
                c.SwaggerDoc("v2", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "CodeMobiles .NETCore", Version = "2.0" });
            

                // Set the comments path for the Swagger JSON and UI.
                // must configure in .csproj file in part of <GenerateDocumentationFile>true</GenerateDocumentationFile>
                // how to comment - check out in AuthController <summary>....

                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);



                // Uses full schema names to avoid v1/v2/v3 schema collisions
                // see: https://github.com/domaindrivendev/Swashbuckle/issues/442
                //c.CustomSchemaIds(x => x.FullName);

                // Set button authorize
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer",
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                  {
                    {new OpenApiSecurityScheme{Reference = new OpenApiReference
                    {
                        Id = "Bearer",
                        Type = ReferenceType.SecurityScheme
                    }}, new List<string>()}
                  });
            });
        }



    }
}