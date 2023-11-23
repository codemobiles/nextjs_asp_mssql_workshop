using backend.Database;
using backend.Models;

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
    }

}