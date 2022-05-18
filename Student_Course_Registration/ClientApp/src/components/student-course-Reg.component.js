import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


class StudentCourseRegForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseList: [],
            studentList: [],
            studentCourseList: [],
            studentCourseList1: []
        }
    }
    componentDidMount() {
        this.getStudents();
        this.getCourses();
    }

    getStudents = () => {
        axios
            .get(
                "http://localhost:44354/api/Student/GetStudentsName/"
            ).then((res) => {
                debugger
                console.log(res.data.Table)
                this.setState({ studentList: res.data.Table })
                console.log(this.state.studentList);
            })
            .catch((err) => console.log(err));
    }

    getCourses = () => {
        axios
            .get(
                "http://localhost:44354/api/Course/GetCoursesName/"
            ).then((res) => {
                debugger
                console.log(res.data.Table)
                this.setState({ courseList: res.data.Table })
                console.log(this.state.courseList);
            })
            .catch((err) => console.log(err));
    }

    handleChange = (event) => {
        let id = event.target.id.split("_")[1]

        if (event.target.id.split("_")[0] == 'student') {


            let studentCourseList = this.state.studentCourseList.slice();
            studentCourseList[id].studentId = parseInt(event.target.value);

            this.setState({ studentCourseList });
            console.log(this.state.studentCourseList);

        }
        else {
            let studentCourseList = this.state.studentCourseList.slice();
            studentCourseList[id].courseId = parseInt(event.target.value);
            this.setState({ studentCourseList });
            console.log(this.state.studentCourseList);

        }
        //const items = this.state.studentCourseList;
        //const item = items.find(t=> t.studentId == event.target.value);
    }

    fncreateSelect = () => {
        let newList = this.state.studentCourseList;
        if ((newList.filter(x => x.studentId == null).length > 0 ||
            newList.filter(x => x.courseId == null).length > 0) && newList.length > 0)
            alert('please select valid Student/Course Names');
        else {
            newList.push({ id: this.state.studentCourseList.length, studentId: null, courseId: null })
            this.setState({ studentCourseList: newList })
        }
    }
    fnbindDropDown = (list) => {
        return <>
            <br />
            <select id={`student_${list.id}`} className={'drp'} onChange={this.handleChange}>
                {
                    this.state.studentList.map(x => {
                        return <option value={x.Pk_StudentId}>{x.FirstName}</option>
                    })
                }
            </select>
            <select id={`course_${list.id}`} className={'drp'} onChange={this.handleChange}>
                {
                    this.state.courseList.map(x => {
                        return <option value={x.Pk_CourseId}>{x.CourseName}</option>
                    })
                }
            </select>

        </>
    }
    handleSubmit(event) {
        let studentCrsRegObject = this.state.studentCourseList
        if (studentCrsRegObject.filter(x => x.studentId == null).length > 0 ||
            studentCrsRegObject.filter(x => x.courseId == null).length > 0)
            alert('please select valid Student/Course Names');
        else {
            axios.post(
                'http://localhost:44354/api/Course/StudeCourseReg', studentCrsRegObject)
                .then(res => {
                    if (res.status === 200) {
                        alert('Student successfully created')
                        window.location.href = 'http://localhost:3000/Report';
                    }
                    else
                        Promise.reject()
                })
                .catch(err => alert('Something went wrong'))
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Student Course Registration</h1>
                <input type="button" className={'crtBtn'} value="Create New Subscription" onClick={() => { this.fncreateSelect() }} />
                {
                    this.state.studentCourseList.map(list => {
                        return this.fnbindDropDown(list)
                    })
                }
                <br />
                <br />

                <br />

                {
                    (this.state.studentCourseList.length > 0) &&
                    <input type="button" onClick={() => { this.handleSubmit() }} className="edit-link" value="Submit" />
                }
            </form>
        )
    }

}
export default StudentCourseRegForm;
                //<input type="button" onClick={() => { this.handleSubmit() }} value="Submit" />
