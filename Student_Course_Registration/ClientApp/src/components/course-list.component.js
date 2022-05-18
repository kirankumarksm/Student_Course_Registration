import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import CourseTableRow from "./CourseTableRow";
import { Link } from "react-router-dom";

const CoursetList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:44354/api/Course/GetAll")
            .then(({ data }) => {
                debugger
                setCourses(data.Table);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        debugger
        return courses.map((res, i) => {
            return <CourseTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
            <Link className={'crtBtn'}
                to={"/create-course/"}>
                Create New Course
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Course Name</th>
                        <th>Course Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default CoursetList;