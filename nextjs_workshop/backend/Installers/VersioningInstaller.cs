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
                // Response header indicating all the version numbers 
                o.ReportApiVersions = true;

                // Resolve ApiVersionUnspecified Issue
                // https://localhost:5001/api/product (without version)
                o.AssumeDefaultVersionWhenUnspecified = true;

                //(major).(minor)
                o.DefaultApiVersion = new ApiVersion(1, 0);
            });
        }
    }
}