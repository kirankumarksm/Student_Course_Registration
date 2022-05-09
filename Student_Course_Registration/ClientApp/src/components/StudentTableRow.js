import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
  
const StudentTableRow = (props) => {
  const { _id, FirstName, LastName } = props.obj;
  
  const deleteStudent = () => {
    axios
      .delete(
"http://localhost:4000/students/delete-student/" + _id)
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
          to={"/edit-student/" + _id}>
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