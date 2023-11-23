using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace backend.Installers
{
    public class CORSInstaller : IInstaller
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddCors(options =>
           {
               // Policy #1
               options.AddPolicy("AllowSpecificOrigins", builder =>
               {
                   builder.WithOrigins(
                       "https://www.w3schools.com",
                       "http://example.com",
                       "http://localhost:4200",
                       "https://localhost:4200",
                       "http://localhost:1152",
                       "http://192.168.99.100:1152",
                       "https://localhost:8081",
                       "http://localhost:8082"
                       )
                   .AllowAnyHeader()
                   .AllowAnyMethod();
                   //    .WithMethods("GET", "POST", "HEAD");
               });

               // Policy #2
               options.AddPolicy("AllowAllOrigins", builder =>
               {
                   builder.AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod();
               });

               /*
                   The browser can skip the preflight request
                   if the following conditions are true:
                   - The request method is GET, HEAD, or POST.
                   - The Content-Type header
                      - application/x-www-form-urlencoded
                      - multipart/form-data
                      - text/plain
               */
           });
        }
    }
}