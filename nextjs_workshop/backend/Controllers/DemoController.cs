using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemoController : ControllerBase
    {
        public DemoController()
        {
        }

        [HttpGet("")]
        public IActionResult GetDefault()
        {
            return Ok(new string[] { "Freezing", "Bracing", });
        }

        [HttpGet("products")]
        public IActionResult GetProducts()
        {
            return Ok(new string[] { "Angular", "VueJS", });
        }


    }
}