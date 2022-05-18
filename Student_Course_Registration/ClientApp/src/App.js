// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
    from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import {
    BrowserRouter as Router, Switch,
    Route, Link
} from "react-router-dom";

// Import other React Component
import CreateStudent from
    "./components/create-student.component";
import EditStudent from
    "./components/edit-student.component";
import StudentList from
    "./components/student-list.component";


import CreateCourse from
    "./components/create-course.component";
import EditCourse from
    "./components/edit-course.component";
import CourseList from
    "./components/course-list.component";


import StudentCourseRegForm from
    "./components/student-course-Reg.component";
import Report from "./components/Report";

// App Component
const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to={"/create-student"}
                                    className="nav-link">
                                    Student Course Registration
                                </Link>
                            </Navbar.Brand>

                            <Nav className="justify-content-end">


                                <Nav>
                                    <Link to={"/student-list"}
                                        className="nav-link">
                                        Student List
                                    </Link>
                                </Nav>



                                <Nav>
                                    <Link to={"/course-list"}
                                        className="nav-link">
                                        Course List
                                    </Link>
                                </Nav>


                                <Nav>
                                    <Link to={"/student-course-Reg"}
                                        className="nav-link">
                                        Student Course Registration
                                    </Link>
                                </Nav>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>

                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="wrapper">
                                <Switch>
                                    <Route exact path="/" component={StudentList} />
                                    <Route path="/create-student" component={CreateStudent} />
                                    <Route path="/edit-student/:id" component={EditStudent} />
                                    <Route path="/student-list" component={StudentList} />
                                    <Route exact path="/" component={CreateCourse} />
                                    <Route path="/create-course" component={CreateCourse} />
                                    <Route path="/edit-course/:id" component={EditCourse} />
                                    <Route path="/course-list" component={CourseList} />
                                    <Route path="/student-course-Reg" component={StudentCourseRegForm} />
                                    <Route path="/Report" component={Report} />

                                </Switch>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
};

export default App;