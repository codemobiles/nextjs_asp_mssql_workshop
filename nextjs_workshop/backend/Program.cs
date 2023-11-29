using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using backend.Database;
using backend.Installers;
using Autofac;
using System.Reflection;
using Autofac.Extensions.DependencyInjection;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.InstallServiceInAssembly(builder.Configuration);
builder.Services.AddAutoMapper(typeof(Program));

// Option 1# to Add services (Repository)
// builder.Services.AddTransient<IProductRepository, ProductRepository>();
// builder.Services.AddTransient<IAuthRepository, AuthRepository>();

builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
// Option 2# to Auto Add Services
builder.Host.ConfigureContainer<ContainerBuilder>(builder => builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
    .Where(t => t.Name.EndsWith("Repository")) // Suffix Naming of AuthRepository, ProductRepository
    .AsImplementedInterfaces());

// Write log file
builder.Host.ConfigureLogging((hostingContext, builder) => builder.AddFile("Logs/cmpos_api-{Date}.txt", LogLevel.Debug, null, false, null, null));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || true)
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseHttpsRedirection();
// app.UseCors("AllowSpecificOrigins");
app.UseCors("AllowAllOrigins");
app.UseAuthentication(); // jwt
app.UseAuthorization();

app.MapControllers();

app.Run();
