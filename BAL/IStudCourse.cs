using Global.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BAL
{
   public interface IStudCourse
    {
        public int SaveStudent(Student _std);
        public int SaveCourse(Course _crs);
    }
}
