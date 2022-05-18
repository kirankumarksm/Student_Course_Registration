import React, { useState } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";


const CreateStudent = () => {
    const [formValues, setFormValues] =
        useState({ FirstName: '', LastName: '', DOB: '', ContactNo: '' })

    // onSubmit handler
    const onSubmit = studentObject => {
        axios.post(
            'http://localhost:44354/api/Student/CreateStudent',
            studentObject)
            .then(res => {
                if (res.status === 200)
                    alert('Student successfully created')
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    // Return student form
    return (
        <StudentForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create Student
        </StudentForm>
    )
}

// Export CreateStudent Component
export default CreateStudent