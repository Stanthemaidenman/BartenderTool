using Microsoft.AspNetCore.Mvc;
using supporttoolapi.Models;

namespace supporttoolapi.Controllers
{
    [Route("suppliers")]
    public class SuppliersController : ControllerBase
    {
        //This gets ID, Name and Country
        [HttpGet("first/")]
        public IActionResult GetFirstPart()
        {
            return Ok(SupplierPartOne.FirstPart());
        }

        //This gets ID, Name and Country, 
        //for an amount of 50 at the time.
        [HttpGet("startId/{start}/endId/{end}/")]
        public IActionResult GetNextAmount(long? start, long? end)
        {
            return Ok(SupplierPartOne.NextAmount(start, end));
        }

        //This gets ID, Name and Country, 
        //for an amount of 50 at the time.
        [HttpGet("startId/{start}/endId/{end}/max/{max}/all/")]
        public IActionResult GetNextAmountFull(long? start, long? end, long? max)
        {
            return Ok(Supplier.NextAmount(start, end, max));
        }

        //This gets One product
        [HttpGet("products/{id}/")]
        public IActionResult Getproduct(long? id)
        {
            return Ok(SupplierProducts.GetProduct(id));
        }

        //This gets All products
        [HttpGet("products/")]
        public IActionResult Getproducts()
        {
            return Ok(SupplierProducts.GetProducts());
        }

        //This gets full complete list of supplier
        [HttpGet("complete/")]
        public IActionResult GetAllData()
        {
            return Ok(Supplier.Suppliers());
        }

    }
}
