using Microsoft.AspNetCore.Mvc;
using supporttoolapi.Models;

namespace supporttoolapi.Controllers
{
    [Route("[controller]")]
    public class BarsController : ControllerBase
    {
        [HttpGet("all/{supplierId}")]
        public IActionResult GetBars(long? supplierId)
        {
            return Ok(Bar.Bars(supplierId));
        }
    }
}
