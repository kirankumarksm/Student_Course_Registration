using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Student_Course_Global
{
   public class Students
    {
        public int Pk_StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [DisplayFormat(DataFormatString ="{0:yyyy-MM-dd}",ApplyFormatInEditMode =true)]
        public DateTime DOB { get; set; }
        public string ContactNo { get; set; }
        public string flag { get; set; }
    }
}
