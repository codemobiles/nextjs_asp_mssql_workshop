using System.Security.Cryptography;
using backend.Database;
using backend.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace backend.Services
{
    public class AuthRepository : IAuthRepository
    {

        private readonly DatabaseContext _context;

        public AuthRepository(DatabaseContext context)
        {
            _context = context;

        }
        public (User, string) Login(User user)
        {
            throw new NotImplementedException();
        }

        public void Register(User user)
        {
            throw new NotImplementedException();
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