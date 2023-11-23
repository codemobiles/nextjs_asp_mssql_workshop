using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.Models;
using backend.Services;
using backend.ViewModels;


// using backend.Models;
using Microsoft.AspNetCore.Mvc;
//using Controllers.Models;

namespace Controllers.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private const string ACTION = "[action]";

        private readonly IMapper _mapper;
        private readonly IAuthRepository _authRepository;

        public AuthController(IMapper mapper, IAuthRepository authRepository, )
        {
            this._authRepository = authRepository;
            this._mapper = mapper;
        }

        [HttpPost(ACTION)]
        public IActionResult Register([FromBody] RegisterViewModel registerViewModel)
        {
            var user = _mapper.Map<User>(registerViewModel);
            _authRepository.Register(user);
            return Ok(new { result = "ok", message = "register successfully" });

        }

        [HttpPost(ACTION)]
        public IActionResult Login([FromBody] LoginViewModel loginViewModel)
        {

            var user = _mapper.Map<User>(loginViewModel);
            (User result, string token) = _authRepository.Login(user);

            if (result == null)
            {
                return Unauthorized(new { token = "", message = "username invalid" });
            }

            if (String.IsNullOrEmpty(token))
            {
                return Unauthorized(new { token = "", message = "password invalid" });
            }

            return Ok(new { token = token, message = "login successfully" });
        }


    }
}