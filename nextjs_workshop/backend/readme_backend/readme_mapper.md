# add package in csproj

- dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection

# Call AddAutoMapper in Program.cs

```
// make sure call this because used in ProductController
builder.Services.AddAutoMapper(typeof(Program));
```

# add util/AutoMapping.cs

The system will load this file automatically

# examples

```
public IActionResult Login([FromBody] LoginViewModel userViewModel)
{
    var user = _mapper.Map<User>(userViewModel);
    (User result, string token) = _authRepository.Login(user);
}
```
