using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace backend.ViewModels
{
    public class ProductViewModel
    {
        [Required]
        [MaxLength(100, ErrorMessage = "Name, maximum length 100")]
        public string ProductName { get; set; }

        [Range(0, 10000)]
        public int ProductStock { get; set; }

        [Range(0, 1_000_000)]
        public int ProductPrice { get; set; }

        public IFormFile Image { get; set; }
    }
}