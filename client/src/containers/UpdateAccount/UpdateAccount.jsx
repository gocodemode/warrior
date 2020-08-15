import React from 'react';
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
import "./UpdateAccount.css";


const styles = {
    container: {
        marginTop: 25,
        border: "10px solid #df6d3e",
        backgroundColor: "#dfab9e",
        padding: 20,
    },
    Button: {
        margin: "5px 15px 0",
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
                    <Button variant="success" type="submit" style={styles.Button}>
                    <Link to="/myaccount" id="white">
                        Save
                    </Link>
                    </Button>
                </Row>
            </Container>
        </div>
    );
};

export default UpdateAccount;