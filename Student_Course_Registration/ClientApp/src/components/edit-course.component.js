import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseForm from "./CourseForm";

// EditStudent Component
const EditCourse = (props) => {
    const [formValues, setFormValues] = useState({
        CourseName: "",
        CourseDetails: ""
    });

    //onSubmit handler
    const onSubmit = (courseObject) => {
        console.log(courseObject);

        axios
            .post(
                "http://localhost:44354/api/Course/CreateCourse/",
                courseObject
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Course successfully updated");
                    props.history.push("/course-list");
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    // Load data from server and reinitialize course form
    useEffect(() => {
        debugger
        alert(props.match.params.id)
        axios
            .get(
                "http://localhost:44354/api/Course/GetCourseById/"
                + props.match.params.id
            )
            .then((res) => {
                debugger
                const { Pk_CourseId, CourseName, CourseDetails } = res.data[0];
                setFormValues({ Pk_CourseId, CourseName, CourseDetails });
            })
            .catch((err) => console.log(err));
    }, []);

    // Return course form
    return (
        <CourseForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Update Course
        </CourseForm>
    );
};

// Export EditCourse Component
export default EditCourse;