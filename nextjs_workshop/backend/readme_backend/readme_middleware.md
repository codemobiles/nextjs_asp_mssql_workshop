#Program.cs

var app = builder.Build();

// Example of simple custom middleware
app.Use(async (context, next) =>
 {
     // await context.Response.WriteAsync("Before Invoke from 1st app.Use()\n");
     // check the result at https://localhost:8081?token=1234      
     Console.WriteLine($"Interceptor-1 Token: {context.Request.Query["token"]}");
     await next();
 });

app.Use(async (context, next) =>
{
    Console.WriteLine("Interceptor-2");
    await next();
});

