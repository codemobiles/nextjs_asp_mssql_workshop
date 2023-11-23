using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
//using backend.Models;

namespace backend.Controllers
{
    [Authorize]
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DatabaseContext context;
        public ProductController(DatabaseContext context)
        {
            this.context = context;
        }


        [HttpGet("")]
        public IActionResult GetProducts()
        {

            var result = this.context.Products.ToList();
            return Ok(result);
        }

    }
}