import React, { Component } from 'react';
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report: []

        }
    }

    componentDidMount() {
        this.getReport();
    }

    getReport = () => {
        axios
            .get("http://localhost:44354/api/Course/GetSubReport")
            .then(({ data }) => {
                debugger
                this.setState({ report: data.Table })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        //const contents = this.state.report.forEach(item => {
        //    return <tr>
        //        <td>{item.FirstName}</td>
        //        <td>{item.CourseName}</td>
        //    </tr>
        //})
        return (
            <div>
                <h1>Report</h1>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Student Name</th>
                            <th scope="col">Course Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.report.map((item) => (
                            <tr key={item.id}>
                                <td>{item.FirstName}</td>
                                <td>{item.CourseName}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            //<div className="table-wrapper">
            //    <h1 className="title">Reports</h1>
            //    <Table striped bordered hover>
            //        <thead>
            //            <tr>
            //                <th>Student Name</th>
            //                <th>Course Name</th>
            //            </tr>
            //            </thead>
            //        <tbody></tbody>

            //    </Table>
            //</div>

        )
    }

}


export default Report;