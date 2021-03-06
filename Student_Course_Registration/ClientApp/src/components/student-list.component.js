import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";
import { Link } from "react-router-dom";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:44354/api/Student/GetAll")
            .then(({ data }) => {
                debugger
                setStudents(data.Table);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return students.map((res, i) => {
            return <StudentTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
            <Link className={'crtBtn'}
                to={"/create-student/"}>
                Create New Student
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default StudentList;