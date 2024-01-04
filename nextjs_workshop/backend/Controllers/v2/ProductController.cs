using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
//using Controllers.Models;
using Microsoft.AspNetCore.Authorization;


namespace backend.Controllers.v2
{
    [ApiVersion("2.0")]
    [ApiController]
    // [Authorize(Roles = "Admin")] // JWT Claim("role")
    [Authorize]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class ProductController : ControllerBase
    {

        private readonly IProductRepository _productRepository;
        public IMapper _mapper { get; }
        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger, IProductRepository productRepository, IMapper mapper)
        {
            this._logger = logger;

            _productRepository = productRepository;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpGet("")]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            _logger.LogInformation("Calling GetProducts");
            var result = _productRepository.GetProducts();
            return Ok(new { type = "query", result });
        }


    }
}