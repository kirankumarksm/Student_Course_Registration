import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
    const { Pk_StudentId, FirstName, LastName } = props.obj;

    const deleteStudent = () => {
        alert(Pk_StudentId)
        axios
            .delete(
                "http://localhost:44354/api/student/DeleteStudent/" + Pk_StudentId)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    return (
        <tr>
            <td>  <Link className="edit-link"
                to={"/edit-student/" + Pk_StudentId}>
                Edit
            </Link></td>
            <td>{FirstName}</td>
            <td>{LastName}</td>
            <td>
                <Button onClick={deleteStudent}
                    size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default StudentTableRow;