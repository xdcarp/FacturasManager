using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ServicesApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class OddController : Controller
    {
        private class ODD {
            public int id;
            public string nombre;            
        }

        [HttpGet]
        public string GetAll()
        {
            ODD[] odds = new ODD[] {
                new ODD() { id = 1, nombre ="Facturas" },
                new ODD() { id = 2, nombre ="Yerba" },
                new ODD() { id = 3, nombre ="Cafe" },
            };

            return JsonConvert.SerializeObject(odds);
        }

        [HttpGet("GetById/{id}")]
        public string GetById(int id)
        {
            ODD odd = new ODD() { id = 1, nombre = "Facturas" };

            return JsonConvert.SerializeObject(odd);
        }


    }
}
