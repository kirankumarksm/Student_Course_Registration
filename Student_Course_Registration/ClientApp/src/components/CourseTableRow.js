import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const CourseTableRow = (props) => {
    debugger
    const { Pk_CourseId, CourseName, CourseDetails } = props.obj;

    const deleteCourse = () => {
        alert(Pk_CourseId)
        axios
            .delete(
                "http://localhost:44354/api/Course/DeleteCourse/" + Pk_CourseId)
            .then((res) => {
                if (res.status === 200) {
                    alert("Course successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    return (
        <tr>
            <td>  <Link className="edit-link"
                to={"/edit-course/" + Pk_CourseId}>
                Edit
            </Link></td>
            <td>{CourseName}</td>
            <td>{CourseDetails}</td>
            <td>
                <Button onClick={deleteCourse}
                    size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default CourseTableRow;