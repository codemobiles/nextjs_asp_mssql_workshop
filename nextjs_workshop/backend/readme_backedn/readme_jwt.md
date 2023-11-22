# Add jwt pacakge

dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer

# Add JwtInstaller

add JWTInstaller.cs

# Enable Authentication in Program.cs

app.UseAuthentication(); // jwt

# Configure JwtSettings in appsettings.json (30 days)

"JwtSettings": {
"Key": "CodeMobiles-DotNetCore",
"Issuer": "CodeMobiles Ltd",
"Audience": "http://codemobiles.com",
"Expire": "30"
},

# Test

```
curl -X 'GET' \
 'https://localhost:8081/api/v1/Product' \
 -H 'accept: text/plain' \
 -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGb3IgVGVzdGluZyIsImlkIjoiMSIsInVzZXJuYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY2OTk2NDQ1NCwiaXNzIjoiQ29kZU1vYmlsZXMgTHRkIiwiYXVkIjoiaHR0cDovL2NvZGVtb2JpbGVzLmNvbSJ9.eAhJ2DnVxmTZdktuQpwbLzGXjjsrwaEk5NZfl7dZZTY'
```

# rsa key pair

https://blog.devgenius.io/jwt-authentication-in-asp-net-core-e67dca9ae3e8
