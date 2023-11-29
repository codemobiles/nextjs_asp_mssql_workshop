using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.Models;
using backend.Services;
using backend.ViewModels;
using Microsoft.AspNetCore.Authorization;



// using backend.Models;
using Microsoft.AspNetCore.Mvc;
//using Controllers.Models;

namespace backend.Controllers.v1
{

    [ApiVersion("1.0")]
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class AuthController : ControllerBase
    {

        private const string ACTION = "[action]";

        private readonly IMapper _mapper;
        private readonly IAuthRepository _authRepository;

        /// <summary>
        /// AuthController constructor
        /// </summary>
        public AuthController(IMapper mapper, IAuthRepository authRepository)
        {
            this._authRepository = authRepository;
            this._mapper = mapper;
        }

        /// <summary>
        /// Regisration route
        /// </summary>
        [HttpPost(ACTION)]
        public IActionResult Register([FromBody] RegisterViewModel registerViewModel)
        {
            var user = _mapper.Map<User>(registerViewModel);
            _authRepository.Register(user);
            return Ok(new { result = "ok", message = "register successfully" });

        }

        /// <summary>
        /// Login - default account(admin and 12341234)
        /// </summary>
        /// <param name="loginViewModel">default account: {"username": "admin","password": "12341234"}</param>        
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

        /// <summary>
        /// GetSession
        /// </summary>
        [Authorize]
        [HttpGet(ACTION)]
        public IActionResult GeSession()
        {

            const string firstname = "Chaiyasit";
            const string lastname = "T.";
            const string email = "admin@gmail.com";
            const string image = "https://codemobiles.com/biz/images/cm_logo.svg";
            const string token = "12341234";

            return Ok(new { result = "ok", user = new { username = "admin", firstname, lastname, email, image, token } });
        }


    }
}