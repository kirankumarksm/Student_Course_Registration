import React, { Component } from 'react';

import axios from 'axios';
//import '../Student/Addstudent.css'
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props)
        this.state = {
            StudentId:0,
            FirstName: 'Kiran',
            LastName: 'KSM',
            DOB: '25-05-1990',
            ContactNo: '9743219466'
        }
    }

    componentDidMount() {
        this.Addstudent()
    }

    Addstudent = () => {
        const data = {
            StudentId:692628,
            FirstName: "TEST",
            LastName: "TEST1",
            DOB:1071998,
            ContactNo: 9743212345}
        debugger
        //axios.post('http://localhost:3000/api/Home/CreateStudent', data).then(response => alert(response.data.StudentId));
        axios.post('https://62765c4a15458100a6ae6802.mockapi.io/api/v1/Student', data).then(response => alert(response.data.StudentId));
        //.then(json => {
            //    if (json.data.Status === 'Success') {
            //        console.log(json.data.Status);
            //        alert("Data Save Successfully");
            //        this.props.history.push('/Studentlist')
            //    }
                //else {
                //    alert('Data not Saved');
                //    debugger;
                //    this.props.history.push('/Studentlist')
                //}
           // })
    }

  render () {
    return (
        <div class="container">
            <div id="form">
                <table id="data_table">
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>
                        <th></th>
                    </tr>

                    <tr id="row1">
                        <td>
                            <button id="edit_button1" class="edit" onclick="edit_row('1')">Edit</button></td>
                        <td id="name_row1">Ankit</td>
                        <td id="country_row1">India</td>
                        <td><button id="save_button1" class="save" onclick="save_row('1')">Save</button></td>
                        <td><button class="delete" onclick="delete_row('1')">Delete</button>
                        </td>
                    </tr>
                    <tr id="row2">
                        <td>
                            <button id="edit_button2" class="edit" onclick="edit_row('2')">Edit</button></td>
                        <td id="name_row2">Ankit</td>
                        <td id="country_row2">India</td>
                        <td><button id="save_button2" class="save" onclick="save_row('1')">Save</button></td>
                        <td><button class="delete" onclick="delete_row('2')">Delete</button>
                        </td>
                    </tr>
                    <tr id="row3">
                        <td>
                            <button id="edit_button3" class="edit" onclick="edit_row('3')">Edit</button></td>
                        <td id="name_row3">Ankit</td>
                        <td id="country_row3">India</td>
                        <td><button id="save_button3" class="save" onclick="save_row('1')">Save</button></td>
                        <td><button class="delete" onclick="delete_row('3')">Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
            </div>
    );
  }
}
