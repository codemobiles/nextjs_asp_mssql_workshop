using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using backend.Models;

namespace backend.Services
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetProducts();
        Product GetProduct(int id);
        void AddProduct(Product product, IFormFile image);
        void EditProduct(Product product, IFormFile? image);
        void DeleteProduct(Product product);
        IEnumerable<Product> SearchProduct(string keyword);
        int CheckOutOfStock();
    }
}