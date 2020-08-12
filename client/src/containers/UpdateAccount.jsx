import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const UpdateAccount = () => {
    return (
        <div>
            <Container>
                <p>First:</p>
                <br />
                <p>Last:</p>
                <br />
                <p>Email:</p>
                <br />
                <Row>
                    <Button variant="success" type="submit">
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