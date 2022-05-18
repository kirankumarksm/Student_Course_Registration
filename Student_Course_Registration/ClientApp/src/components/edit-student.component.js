import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

// EditStudent Component
const EditStudent = (props) => {
    const [formValues, setFormValues] = useState({
        //Pk_StudentId:0,
        FirstName: "",
        LastName: "",
        DOB: "",
        ContactNo: ""
    });

    //onSubmit handler
    const onSubmit = (studentObject) => {
        console.log(studentObject);
        axios
            .post(
                "http://localhost:44354/api/Student/CreateStudent/",
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
        alert(props.match.params.id)
        axios
            .get(
                "http://localhost:44354/api/Student/GetStudentById/"
                + props.match.params.id
            ).then((res) => {
                debugger
                console.log(res)
                //res.data[0] = { Pk_StudentId: 8, FirstName: 'Kiran', LastName: 'Kumar', DOB: '04/06/2022', ContactNo: '0'}
                const { Pk_StudentId, FirstName, LastName, DOB, ContactNo } = res.data[0];
                setFormValues({ Pk_StudentId, FirstName, LastName, DOB, ContactNo });
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