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
                       "http://localhost:3000",
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