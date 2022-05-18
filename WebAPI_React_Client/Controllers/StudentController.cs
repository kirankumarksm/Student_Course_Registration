
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
    public class StudentController : ApiController
    {
        Bll _bl = new Bll();
        [HttpGet]
        public object GetAll()
        {
            return _bl.GetStudents();
        }

        public int CreateStudent(Students _std)
        {
            return _bl.SaveStudent(_std);
        }


        [HttpGet]
        public DataTable GetStudentById(int id)
        {
            try
            {
                return _bl.GetStudById(id);
            }
            catch (Exception ex)
            {
                return null;
            }
        }


        public int DeleteStudent(int id)
        {
            try
            {
                return _bl.DeleteStudent(id);
            }
            catch (Exception ex)
            {
                //return StatusCode(StatusCodes.Status500InternalServerError,
                //    "Error retrieving data from the database");
                return 0;
            }
        }

        public object GetStudentsName()
        {
            try
            {
                return _bl.GetStudentsName();
            }
            catch (Exception ex)
            {

                return 0;

            }
        }



    }

}