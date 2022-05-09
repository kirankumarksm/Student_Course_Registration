using BAL;
using Global.Model;
//using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace Student_Course_Registration.Controllers
{
    [Route("api/[controller]/[action]")]
  //[ApiController]
    public class HomeController : ApiController
    {
        private readonly ILogger<HomeController> _logger;
        public Bll _bll= new Bll();
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        [Route("api/Student/CreateStudent")]
        [HttpGet]
        public int test()
        {
            return 1;
        }

        [HttpPost]
        public object CreateStudent(Student _std)
        {
            try
            {
              return  _bll.SaveStudent(_std);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public object CreateCourse(Course _crs)
        {
            try
            {
                return _bll.SaveCourse(_crs);
            }
            catch(Exception ex) {
                throw ex;
            }
        }

        public object GetStudents()
        {
           return _bll.GetStudents();
            
        }

        //public IEnumerable<WeatherForecast> Get()
        //{
        //    var rng = new Random();
        //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        Date = DateTime.Now.AddDays(index),
        //        TemperatureC = rng.Next(-20, 55),
        //        Summary = Summaries[rng.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //}
    }
}
