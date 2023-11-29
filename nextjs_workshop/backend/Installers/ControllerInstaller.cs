using System.Linq;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace backend.Installers
{
    public class ControllerInstaller : IInstaller
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            // Normal JSON Format
            //services.AddControllers().AddNewtonsoftJson();

            //JSON Convert key-name to snake case (optional)
            // services.AddControllers().AddNewtonsoftJson(options =>
            //     options.SerializerSettings.ContractResolver = new DefaultContractResolver()
            //     {
            //         NamingStrategy = new SnakeCaseNamingStrategy()
            //     }
            // );
            // SwaggerDoc Api version
            services.AddControllers(c =>
               // decorate Controllers to distinguish SwaggerDoc (v1, v2, etc.)
               c.Conventions.Add(new ApiExplorerGroupPerVersionConvention())
            ).AddNewtonsoftJson();
        }
    }

    class ApiExplorerGroupPerVersionConvention : IControllerModelConvention
    {
        public void Apply(ControllerModel controller)
        {
            var controllerNamespace = controller.ControllerType.Namespace; // e.g. "Controllers.v1"
            var apiVersion = controllerNamespace?.Split('.').Last().ToLower();
            controller.ApiExplorer.GroupName = apiVersion;
        }
    }
}

