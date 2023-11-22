# CORSInstaller.cs

- AddPolicy
  // Policy #1
  options.AddPolicy("AllowSpecificOrigins", builder => {...

# Program.cs

app.UseCors("AllowSpecificOrigins");
// app.UseCors("AllowAllOrigins");
