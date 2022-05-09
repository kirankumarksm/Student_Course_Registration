import React from "react";
// import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const CourseForm = (props) => {
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
                    <label>Course Name</label>

                        <Field name="CourseName" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="CourseName"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>CourseDetails</label>
                        <Field name="CourseDetails" type="textarea"
                            className="form-control" />
                        <ErrorMessage
                            name="CourseDetails"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                        </FormGroup>
                   
                <br/><br/>
                    <Button variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default CourseForm;