import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';


const styles = {
    container: {
        marginTop: 25,
        border: "10px solid #df6d3e",
        backgroundColor: "#dfab9e"
    },
};

const UpdateAccount = () => {
    return (
        <div>
            <Container style={styles.container}>
                    <Form.Group>
                    <p>First Name:</p>
                    <Form.Control type="text" placeholder="First Name" />
                    <br />
                    <p>Last Name:</p>
                    <Form.Control type="text" placeholder="Last Name" />
                    <br />
                    <p>Email:</p>
                    <Form.Control type="text" placeholder="Email Address" />
                    <br />
                    </Form.Group>
                <Row>
                    <Button variant="warning" type="submit">
                    <Link to="/myaccount">
                        Save
                    </Link>
                    </Button>
                </Row>
            </Container>
        </div>
    );
};

export default UpdateAccount;