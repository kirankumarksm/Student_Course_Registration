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
            'http://localhost:44354/api/Course/CreateCourse',
            courseObject)

            .then(res => {
                if (res.status === 200) {
                    alert('Course successfully created')
                    window.location.href = 'http://localhost:3000/course-list'
                }
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    // Return student form
    return (
        <CourseForm initialValues={formValues}
            onSubmit={onSubmit} to={"/Report"}
            enableReinitialize>
            Create Course
        </CourseForm>
    )
}

// Export CreateStudent Component
export default CreateCourse
