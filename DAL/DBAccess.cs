using Global.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace DAL
{
    public interface Istudent
    {
        public int AddStudent(Student std);
        public List<Student> GetStudents();
    }

    public class singletonDb
    {
        SqlConnection con = new SqlConnection("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Student_Course_Reg;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

    public int AddStudent(Student std)
    {
        DataSet ds = new DataSet();
        try
        {
            con.Open();
                SqlCommand com = new SqlCommand("Sp_Student", con);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@Pk_StudentId", std.StudentId);
                com.Parameters.AddWithValue("@FirstName", std.FirstName);
                com.Parameters.AddWithValue("@LastName", std.LastName);
                com.Parameters.AddWithValue("@DOB", std.DOB);
                com.Parameters.AddWithValue("@ContactNo", std.ContactNo);
                com.Parameters.AddWithValue("@flag", std.flag);
                SqlDataAdapter da = new SqlDataAdapter(com);
                da.Fill(ds);
                return 1;
            }
            catch(Exception ex)
            {
                Console.Write(ex.Message);
                return 0;
            }
            
        }

        public int AddCourse(Course crs)
        {
            DataSet ds = new DataSet();
            try
            {
                con.Open();
                SqlCommand com = new SqlCommand("Sp_Course", con);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@Pk_CourseId", crs.CourseId);
                com.Parameters.AddWithValue("@CourseName", crs.CourseName);
                com.Parameters.AddWithValue("@CourseDetails", crs.CourseDetails);
                SqlDataAdapter da = new SqlDataAdapter(com);
                da.Fill(ds);
                return 1;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        //public List<Student>GetStudents()
        //{
        //    List<Student> studDetails = new List<Student>();
        //    con.Open();
        //    DataTable dt = new DataTable();
        //    Student _std = new Student();
        //    _std.flag = "get";
        //    SqlCommand com = new SqlCommand("Sp_GetStudent", con);
        //    com.CommandType = CommandType.StoredProcedure;
        //    com.ExecuteNonQuery();
        //    SqlDataAdapter da = new SqlDataAdapter(com);
        //    da.Fill(dt);
        //    com.Parameters.AddWithValue("@flag", _std.flag);
        //    //DataSet ds = new DataSet();
        //        Student stud = new Student();
        //        //stud.StudentId = Convert.ToString(dr["StudentId"]);
        //        studDetails.Add(stud);
        //    con.Close();
        //    return studDetails;
        //}


        public DataSet GetStudents()
        {
            con.Open();
            Student _std = new Student();
            _std.flag = "get";
            SqlCommand com = new SqlCommand("Sp_GetStudent", con);
            com.CommandType = CommandType.StoredProcedure;
            DataSet ds = new DataSet();
            com.Parameters.AddWithValue("@flag", _std.flag);
            SqlDataAdapter da = new SqlDataAdapter(com);
            da.Fill(ds);
            con.Close();
            return ds;
        }

    }
}
