import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const MyAccount = () => {
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
              <Link to="/updateaccount">
                Update Account
              </Link>
            </Button>
            <Button variant="danger" type="submit">
                Delete Account
            </Button>
            <Button variant="warning" type="submit">
                <Link to="/viewworkouts">
                    My Workouts
                </Link>
            </Button>
            </Row>
        </Container>
    </div>
  );
};

export default MyAccount;
