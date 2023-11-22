# Check Authorize by role

[ApiVersion("1.0")]
[ApiController]
[Authorize(Roles = "Admin")] // JWT Claim("role")  
 [Route("api/v{version:apiVersion}/[controller]")]
public class ProductController : ControllerBase


# Define role in jwt installer

- AuthRepository.cs
- new Claim(ClaimTypes.Role, user.Position ?? "Normal")
