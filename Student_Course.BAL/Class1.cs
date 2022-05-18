using Student_Course.DAL;
using Student_Course_Global;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student_Course.BAL
{
    public class Bll
    {
        singletonDb _db = new singletonDb();

        public int SaveStudent(Students _std)
        {
            _std.flag = "update";
            if (string.IsNullOrEmpty(_std.Pk_StudentId.ToString()) || _std.Pk_StudentId == 0)
                _std.flag = "insert";
            return _db.AddStudent(_std);
        }

        public object GetStudents()
        {
            return _db.GetStudents();
        }
        public object GetStudentsName()
        {
            return _db.GetStudentsName();
        }
        public DataTable GetStudById(int stdid)
        {
            return _db.GetStudById(stdid);
        }

        public int DeleteStudent(int id)
        {
            return _db.DeleteStudent(id);
        }

        //*****************************************COURSE****************************

        public int SaveCourse(Courses _crs)
        {
            _crs.flag = "update";
            if (string.IsNullOrEmpty(_crs.Pk_CourseId.ToString()) || _crs.Pk_CourseId == 0)
                _crs.flag = "insert";
            return _db.AddCourse(_crs);
        }

        public object GetCourse()
        {
            return _db.GetCourses();
        }
        public object GetCoursesName()
        {
            return _db.GetCoursesName();
        }
        public DataTable GetCourseById(int crsid)
        {
            return _db.GetCourseById(crsid);
        }

        public int DeleteCourse(int id)
        {
            return _db.DeleteCourse(id);
        }

        //*******************************SUBSCRIPTION*******************************************

        public object SaveSubscription(List<CourseRegForm> _stdcrs)
        {
            return _db.insertDataTable(_stdcrs);
        }

        public object GetSubReport()
        {
            return _db.GetSubscriptionReport();
        }
    }
}
