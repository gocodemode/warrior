import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const styles = {
    container: {
        marginTop: 25,
        border: "10px solid #df6d3e",
        backgroundColor: "#dfab9e"
    },
};

const UpdateWorkout = () => {
    return (
        <div>
           <Container style={styles.container}>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        {/* Have Name, Location of Workout and Checked Boxes be updated when sent to Update Workout Page */}
                        <Form.Control type="text" placeholder="Name of Event" />
                        <br /> 
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Where will the session be?" />
                        <br />
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Where will the session be?" />
                        <br />
                        <Form.Label>Date</Form.Label>
                            <Form.Check id="Sunday" label="Sunday" />
                            <Form.Check id="Monday" label="Monday" />
                            <Form.Check id="Tuesday" label="Tuesday" />
                            <Form.Check id="Wednesday" label="Wednesday" />
                            <Form.Check id="Thursday" label="Thursday" />
                            <Form.Check id="Friday" label="Friday" />
                            <Form.Check id="Saturday" label="Saturday" ></Form.Check>
                        <br />
                        <Button variant="success">
                            <Link to="/viewworkouts" id="white">
                            Update
                            </Link>
                        </Button>{' '}      
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
};

export default UpdateWorkout;