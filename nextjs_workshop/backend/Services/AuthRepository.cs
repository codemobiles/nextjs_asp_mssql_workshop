using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using backend.Database;
using backend.Installers;
using backend.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.IdentityModel.Tokens;

namespace backend.Services
{
    public class AuthRepository : IAuthRepository
    {

        private readonly DatabaseContext _context;
        private readonly JwtSettings _jwtSettings;

        public AuthRepository(DatabaseContext context, JwtSettings jwtSettings)
        {
            _jwtSettings = jwtSettings;
            _context = context;

        }
        public (User, string) Login(User user)
        {
            var result = _context.Users.SingleOrDefault(u => u.Username == user.Username);
            var token = String.Empty;
            if (result != null && VerifyPassword(result.Password!, user.Password!))
            {
                token = BuildToken(result); 
            }

            return (result, token);
        }

        public void Register(User user)
        {
            if (user.Password != null)
            {
                user.Password = CreatePasswordHash(user.Password);
                _context.Users.Add(user);
                _context.SaveChanges();
            }
        }

        private string BuildToken(User user)
        {
            // key is case-sensitive
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, "For Testing"),
                new Claim("id", user.Id.ToString()),
                new Claim("username", user.Username),
                new Claim(ClaimTypes.Role, user.Position ?? "Normal")
            };

            var expires = DateTime.Now.AddDays(Convert.ToDouble(_jwtSettings.Expire));
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Audience,
                claims: claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);

        }


        public bool VerifyPassword(string hash, string password)
        {
            var parts = hash.Split('.', 2);

            if (parts.Length != 2)
            {
                return false;
            }

            var salt = Convert.FromBase64String(parts[0]);
            var passwordHash = parts[1];

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            return passwordHash == hashed;
        }

        private string CreatePasswordHash(string password)
        {
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));
            return $"{Convert.ToBase64String(salt)}.{hashed}";
        }
    }

}