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


namespace backend.Controllers.v1
{
    [ApiVersion("1.0")]
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

        [HttpGet("")]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            _logger.LogInformation("Calling GetProducts");
            var result = _productRepository.GetProducts();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            try
            {
                var result = _productRepository.GetProduct(id);
                if (result == null)
                {
                    return NotFound(new { message = "Product not found" });
                }
                return Ok(result);
            }
            catch (Exception error)
            {
                // _logger.LogError($"Log GetProduct: {error}");
                return StatusCode(500, new { message = error });
            }
        }

        ///..../search/name?keyword=1234
        [HttpGet("search/name/")]
        public IActionResult SearchProduct([FromQuery] string keyword)
        {
            try
            {
                var result = _productRepository.SearchProduct(keyword);
                return Ok(result);
            }
            catch (Exception error)
            {
                // _logger.LogError($"Log SearchProducts: {error}");
                return StatusCode(500, new { message = error });
            }
        }


        [HttpPost]
        //[DisableRequestSizeLimit]
        //[RequestSizeLimit(60_000_000)] // bytes
        // public IActionResult AddProduct([FromForm] ProductViewModel productViewModel)
        public IActionResult AddProduct([FromForm] Product product, IFormFile file)
        {
            try
            {
                // var product = _mapper.Map<Products>(productViewModel);
                _productRepository.AddProduct(product, file);
                return Ok();
            }
            catch (Exception error)
            {
                // _logger.LogError($"Log CreateProduct: {error}");
                return StatusCode(500, new { message = error });
            }
        }

        [HttpPut]
        public IActionResult EditProduct([FromForm] Product product, IFormFile? file)

        {
            try
            {
                var result = _productRepository.GetProduct((int)product.ProductId!);
                if (result == null)
                {
                    return NotFound(new { message = "Product not found" });
                }

                result.Name = product.Name;
                result.Price = product.Price;
                result.Stock = product.Stock;


                _productRepository.EditProduct(result, file);


                return Ok(result);
            }
            catch (Exception error)
            {
                // _logger.LogError($"Log UpdateProduct: {error}");
                return StatusCode(500, new { message = error });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                var product = _productRepository.GetProduct(id);
                if (product == null)
                {
                    return NotFound(new { message = "Product not found" });
                }
                _productRepository.DeleteProduct(product);
                return NoContent();
            }
            catch (Exception error)
            {
                // _logger.LogError($"Log DeleteProduct: {error}");
                return StatusCode(500, new { message = error });
            }
        }

    }
}