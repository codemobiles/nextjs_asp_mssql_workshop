using backend.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace backend.Installers
{
    public class DBInstaller : IInstaller
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<DatabaseContext>(options =>
                        options.UseSqlServer(configuration.GetConnectionString("ConnectionSQLServer")));

            // services.AddDbContext<DatabaseContext>(options =>
            //     options.UseMySql(configuration.GetConnectionString("ConnectionMySQL")));

            // services.AddDbContext<DatabaseContext>(options =>
            //     options.UseSqlite(configuration.GetConnectionString("ConnectionSQLite")));

            // services.AddDbContext<DatabaseContext>(options =>
            //  options.UseOracle(configuration.GetConnectionString("ConnectionORACLE")));

            // Create Database when Database not found (code first concept)
            // var serviceProvider = services.BuildServiceProvider();
            // DBinitialize.INIT(serviceProvider);

            // <PackageReference Include="Pomelo.EntityFrameworkCore.MySql" Version="2.2.6" />
            // <PackageReference Include="Microsoft.EntityFrameworkCore.Sqlite" Version="2.0.0" />
            // <PackageReference Include="Oracle.EntityFrameworkCore" Version="2.19.50" />

        }
    }
}