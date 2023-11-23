using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace backend.Installers
{
    public class JWTInstaller : IInstaller
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            var jwtSettings = new JwtSettings();
            // Get jwtSettings from appsettings.json
            configuration.Bind(nameof(jwtSettings), jwtSettings);
            services.AddSingleton(jwtSettings);

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
             {
                 options.TokenValidationParameters = new TokenValidationParameters
                 {
                     ValidateIssuer = true,
                     ValidIssuer = jwtSettings.Issuer,
                     ValidateAudience = true,
                     ValidAudience = jwtSettings.Audience,
                     ValidateLifetime = true,
                     //  ClockSkew = TimeSpan.Zero, // disable delay when token is expire
                     ClockSkew = TimeSpan.FromDays(double.Parse(jwtSettings.Expire)), // 30 days
                     ValidateIssuerSigningKey = true,
                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Key))
                 };
             });
        }
    }

    public class JwtSettings
    {
        public string Key { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public string Expire { get; set; }
    }
}

