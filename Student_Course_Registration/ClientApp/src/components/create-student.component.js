// CreateStudent Component for add new student
  
// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";
  
// CreateStudent Component
const CreateStudent = () => {
  const [formValues] = 
    useState({ FirstName: '', LastName: '', DOB: '',ContactNo:'' })
  const onSubmit = () => {
    fetch('https://localhost:44356/api/Student/CreateStudent',{
    // fetch('https://localhost:44356/api/Student/CreateStudent',{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
        FirstName:"TEST",
        LastName:"TETTEST",
        DOB:"",
        ContactNo:"",

      })
    })
    

    //   .then(res => {
    //     if (res.status === 200)
    //       alert('Student successfully created')
    //     else
    //       Promise.reject()
    //   })
      .catch(err => alert('Something went wrong'))
  }


  // const onSubmit = () => {
  //   // axios.post('https://localhost:3000/api/Student/CreateStudent', studentObject)
  //   fetch('https://localhost:3000/api/Student/CreateStudent')
  //   .then(res => {
  //       const persons = res.data;
  //       alert(persons);
  //       // this.setState({ persons });
  //     })

  //   //   .then(res => {
  //   //     if (res.status === 200)
  //   //       alert('Student successfully created')
  //   //     else
  //   //       Promise.reject()
  //   //   })
  //     .catch(err => alert('Something went wrong'))
  // }
    
  // Return student form
  return(
    <StudentForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Student
    </StudentForm>
  )
}
  
// Export CreateStudent Component
export default CreateStudent