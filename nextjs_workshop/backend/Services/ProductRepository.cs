using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using backend.Database;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Services
{
    public class ProductRepository : IProductRepository
    {
        private readonly DatabaseContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ProductRepository(DatabaseContext context, IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
            _context = context;
        }

        public IEnumerable<Product> GetProducts()
        {
            return _context.Products.OrderByDescending(p => p.ProductId).ToList();
        }

        public Product GetProduct(int id)
        {
            return _context.Products.Find(id)!;
        }

        public void AddProduct(Product product, IFormFile image)
        {
            string fileName = UploadProductImage(image);

            if (!String.IsNullOrEmpty(fileName))
            {
                product.Image = fileName;
            }

            _context.Add(product);
            _context.SaveChanges();
        }

        public void EditProduct(Product product, IFormFile? image)
        {
            if (image != null)
            {
                string fileName = UploadProductImage(image);
                if (!String.IsNullOrEmpty(fileName))
                {
                    product.Image = fileName;
                }
            }

            _context.Entry(product).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void DeleteProduct(Product product)
        {
            _context.Remove(product);
            _context.SaveChanges();
        }

        public string UploadProductImage(IFormFile image)
        {
            string fileName = null;

            if (image != null && image.Length > 0)
            {
                string filePath = _webHostEnvironment.WebRootPath + "/images/";
                fileName = Guid.NewGuid().ToString() + System.IO.Path.GetExtension(image.FileName); // unique name
                string fullPath = filePath + fileName;
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    image.CopyTo(stream);
                    stream.Flush();
                }
            }
            return fileName;
        }

        public IEnumerable<Product> SearchProduct(string keyword)
        {
            return (from product in _context.Products
                    where EF.Functions.Like(product.Name, "%" + keyword + "%")
                    select product).ToList(); ;
        }

        public int CheckOutOfStock()
        {
            return _context.Products.Where(p => p.Stock == 0).Count();
        }

    }
}



/*



           // access hosting (startup.cs)
            services.AddHttpContextAccessor();

            IHttpContextAccessor httpContextAccessor,

         // Note: recommended used async Task
        public async Task<List<String>> UploadProductImages()
        {
            var files = _httpContextAccessor.HttpContext.Request.Form.Files;
            List<String> fileNameArray = null;

            if (files.Count > 0)
            {
                const string folder = "/images/";
                string filePath = _webHostEnvironment.WebRootPath + folder;

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }

                fileNameArray = new List<String>();

                foreach (var formFile in files)
                {
                    var fileName = Guid.NewGuid().ToString() + System.IO.Path.GetExtension(formFile.FileName); // unique name
                    string fullPath = filePath + fileName;

                    if (formFile.Length > 0)
                    {
                        using (var stream = new FileStream(fullPath, FileMode.Create))
                        {
                            await formFile.CopyToAsync(stream);
                        }
                    }

                    fileNameArray.Add(fileName);
                }
            }
            return fileNameArray;
        }


     [HttpGet("search/name/")]
        public IActionResult SearchProduct([FromQuery] string keyword)
        {
            try
            {
                var result = (from product in DatabaseContext.Product
                              where EF.Functions.Like(product.Name, "%" + keyword + "%")
                              select product).ToList();

                return Ok(new { result = result, message = "request successfully" });
            }
            catch (Exception error)
            {
                _logger.LogError($"Log SearchProduct: {error}");
                return StatusCode(500, new { result = "", message = error });
            }
        }

        [HttpGet("count/out_of_stock")]
        public IActionResult CheckOutOfStock()
        {
            try
            {
                var count = DatabaseContext.Product.Where(p => p.Stock == 0).Count();

                return Ok(new { out_of_stock_product = count, message = "request successfully" });
            }
            catch (Exception error)
            {
                _logger.LogError($"Log CheckOutOfStock: {error}");
                return StatusCode(500, new { result = "", message = error });
            }
        }

        public void GetSession()
        {
            const string SessionKeyName = "username";
            var username = HttpContext.Session.GetString(SessionKeyName);
            Console.WriteLine($"result session [username]: {username}");
        }
 */





//case order by
//return View(await context.Product.OrderBy(o => o.Price).ToListAsync());
//return View(await (from p in context.Product orderby p.Price descending select p).ToListAsync());
//return View(context.Product.FromSql("select * from Product order by Price ASC"));

/*
        public async Task<IActionResult> Query()
        {
            //exam 1
            IEnumerable<Product> exam1 = context.Product.FromSql("select * from Product where id = 1");
            List<Product> exam2 = new List<Product>();
            List<Product> exam3 = new List<Product>();
            List<Product> exam4 = new List<Product>();

            var conn = context.Database.GetDbConnection();
            DbDataReader reader;
            string query;

            try
            {
                await conn.OpenAsync();
                using (var command = conn.CreateCommand())
                {
                    //exam 2
                    query = "select * from Product";
                    command.CommandText = query;
                    reader = await command.ExecuteReaderAsync();

                    if (reader.HasRows)
                    {
                        while (await reader.ReadAsync())
                        {
                            var row = new Product
                            {
                                ID = reader.GetInt32(0),
                                CodeName = reader.GetString(2),
                                Name = reader.GetString(9),
                                Detail = reader.GetString(3),
                                Price = reader.GetDecimal(10),
                                CategoryID = reader.GetInt32(1),
                                Image1 = reader.GetString(4),
                                Image2 = reader.GetString(5),
                                Image3 = reader.GetString(6),
                                Image4 = reader.GetString(7),
                                Image5 = reader.GetString(8),
                                Timestamp = reader.GetDateTime(11)
                            };
                            exam2.Add(row);
                        }
                    }

                    reader.Close();

                    //exam 3
                    int nCatID = 2;
                    exam3 = context.Product.FromSql("myStoredProcedure @p0", nCatID).ToList();

                    //exam 4
                    query = "myStoredProcedure";
                    command.CommandText = query;
                    command.CommandType = CommandType.StoredProcedure;
                    reader = await command.ExecuteReaderAsync();

                    if (reader.HasRows)
                    {
                         while (await reader.ReadAsync())
                        {
                            var row = new Product
                            {
                                ID = reader.GetInt32(0),
                                CodeName = reader.GetString(2),
                                Name = reader.GetString(9),
                                Detail = reader.GetString(3),
                                Price = reader.GetDecimal(10),
                                CategoryID = reader.GetInt32(1),
                                Image1 = reader.GetString(4),
                                Image2 = reader.GetString(5),
                                Image3 = reader.GetString(6),
                                Image4 = reader.GetString(7),
                                Image5 = reader.GetString(8),
                                Timestamp = reader.GetDateTime(11)
                            };

                            exam4.Add(row);
                        }
                    }

                    reader.Close();
                }
            }
            catch
            {

            }finally{
                conn.Close();
            }

            return View();
        }

        //exam 5
        using (var command = context.Database.GetDbConnection().CreateCommand())
        {
            command.CommandText = "StoredProcedureName";
            command.CommandType = CommandType.StoredProcedure;

            context.Database.OpenConnection();

            var dataReader = command.ExecuteReader();

            if (dataReader.Read())
            {
                string _test = dataReader.GetString(dataReader.GetOrdinal("ColumnName"));
            }
        }

        //exam 6
        await Context.Database.ExecuteSqlCommandAsync("myStoredProcedure @p0, @p1", 
        parameters: new[] { "codemobiles", "cmdev" });
 */
