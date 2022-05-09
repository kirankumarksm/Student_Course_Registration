// CreateStudent Component for add new student
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CourseForm from "./CourseForm";
  
// CreateStudent Component
const CreateCourse = () => {
  const [formValues, setFormValues] = 
    useState({ CourseName: '', CourseDetails: '' })
  // onSubmit handler
  const onSubmit = courseObject => {
    axios.post(
'https://localhost:44356/Course/Post', 
courseObject)

      .then(res => {
        if (res.status === 200)
          alert('Course successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return student form
  return(
    <CourseForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Course
    </CourseForm>
  )
}
  
// Export CreateStudent Component
export default CreateCourse