using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace backend.Installers
{
    public class VersioningInstaller : IInstaller
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddApiVersioning(o =>
            {
                // tutorial
                // https://blog.christian-schou.dk/how-to-use-api-versioning-in-net-core-web-api/

                //(major).(minor)
                o.DefaultApiVersion = new ApiVersion(1, 0);

                // Response header indicating all the version numbers 
                o.ReportApiVersions = true;

                // Resolve ApiVersionUnspecified Issue
                // https://localhost:5001/api/product (without version)
                o.AssumeDefaultVersionWhenUnspecified = true;


            });
        }
    }
}