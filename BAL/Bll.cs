using DAL;
using Global.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace BAL
{
    public class Bll
    {
        singletonDb _db = new singletonDb();
        
        public object SaveStudent(Student _std)
        {
            _std.flag = "insert";
            return _db.AddStudent(_std);
        }
        public object SaveCourse(Course _crs)
        {
            _crs.flag = "insert";
            return _db.AddCourse(_crs);
        }
        public object GetStudents()
        {
            return _db.GetStudents();
        }
    }
}
