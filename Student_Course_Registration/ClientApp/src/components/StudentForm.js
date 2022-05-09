import React from "react";
// import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const StudentForm = (props) => {
    //const validationSchema = Yup.object().shape({
    //    name: Yup.string().required("Required"),
    //    email: Yup.string()
    //        .email("You have enter an invalid email address")
    //        .required("Required"),
    //    rollno: Yup.number()
    //        .positive("Invalid roll number")
    //        .integer("Invalid roll number")
    //        .required("Required"),
    //});
    console.log(props);
    return (
        <div className="form-wrapper">
            <Formik {...props}>
                <Form>
                    <FormGroup>
                    <label>First Name</label>

                        <Field name="FirstName" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="FirstName"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Last Name</label>
                        <Field name="LastName" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="LastName"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>DOB</label>
                        <Field name="DOB" type="date"
                            className="form-control" />
                        <ErrorMessage
                            name="Dob"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                </FormGroup>
                <FormGroup>
                    <label>Contact No</label>
                    <Field name="ContactNo" type="Number"
                        className="form-control" />
                    <ErrorMessage
                        name="Number"
                        className="d-block invalid-feedback"
                        component="span"
                    />
                </FormGroup><br/><br/>
                    <Button variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default StudentForm;