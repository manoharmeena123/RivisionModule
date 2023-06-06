using Microsoft.AspNetCore.Mvc;
using Day_12.Models;
using System.Threading.Tasks;

namespace Day_12.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly LearnDbContext _dbContext;

        public ProductController(LearnDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet(Name = "getall")]
        public async Task<IActionResult> Get()
        {
            var products = await _dbContext.Products.ToListAsync();
            return Ok(products);
        }
    }
}


// database cmd =================================================>
// dotnet ef dbcontext scaffold "Server=127.0.0.1;Port=3306;Database=LearnDB;Uid=root;Pwd=manoharmeena;" Pomelo.EntityFrameworkCore.MySql --output-dir Models

