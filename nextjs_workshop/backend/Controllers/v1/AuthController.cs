using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
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


        public AuthController()
        {
        }

        [HttpPost(ACTION)]
        public IActionResult Register([FromBody] User user)
        {
            return Ok(new { result = "ok", message = "register successfully", user });
        }

        [HttpPost(ACTION)]
        public IActionResult Login([FromBody] LoginViewModel loginViewModel)
        {

            var user = _mapper.Map<User>(loginViewModel);
            return Ok(new { result = "ok", message = "login successfully", user });
        }


    }
}