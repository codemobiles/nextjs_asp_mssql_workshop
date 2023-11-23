using backend.Models;

namespace backend.Services
{
    public interface IAuthRepository
    {
        void Register(User user);
        (User, string) Login(User user);
    }

}