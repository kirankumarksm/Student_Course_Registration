// EditStudent Component for update student data
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
  
// EditStudent Component
const EditStudent = (props) => {
  const [formValues, setFormValues] = useState({
    FirstName: "",
    LastName: "",
    DOB: "",
    ContactNo:""
  });
    
  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put(
        "http://localhost:4000/students/update-student/" +
          props.match.params.id,
        studentObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          props.history.push("/student-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/students/update-student/" 
        + props.match.params.id
      )
      .then((res) => {
        const { FirstName, LastName, DOB,ContactNo } = res.data;
        setFormValues({ FirstName, LastName, DOB,ContactNo });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </StudentForm>
  );
};
  
// Export EditStudent Component
export default EditStudent;