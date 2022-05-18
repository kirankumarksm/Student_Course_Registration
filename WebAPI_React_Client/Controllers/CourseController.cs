
using Student_Course.BAL;
using Student_Course_Global;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI_React_Client.Controllers
{
    //[EnableCors("*","*","*")]
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CourseController : ApiController
    {
        Bll _bl = new Bll();
        [HttpGet]
        public object GetAll()
        {
            return _bl.GetCourse();
        }

        public int CreateCourse(Courses _crs)
        {
            return _bl.SaveCourse(_crs);
        }

        public object GetCoursesName()
        {
            try
            {
                return _bl.GetCoursesName();
            }
            catch (Exception ex)
            {

                return 0;

            }
        }

        [HttpGet]
        public DataTable GetCourseById(int id)
        {
            try
            {
                return _bl.GetCourseById(id);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public int DeleteCourse(int id)
        {
            try
            {
                return _bl.DeleteCourse(id);
            }
            catch (Exception ex)
            {
                //return StatusCode(StatusCodes.Status500InternalServerError,
                //    "Error retrieving data from the database");
                return 0;
            }
        }

        public object StudeCourseReg(List<CourseRegForm> _stdcrs)
        {
            return _bl.SaveSubscription(_stdcrs);

        }

        public object GetSubReport()
        {
            try
            {
                return _bl.GetSubReport();
            }
            catch (Exception ex)
            {

                return 0;

            }
        }


    }
}
