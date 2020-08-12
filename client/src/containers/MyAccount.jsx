import React from "react";
import { Container, ListGroup, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <div>
        <Container>
            <ListGroup>
                <p>First:</p>
                <ListGroup.Item>Bobby</ListGroup.Item>
                <br />
                <p>Last:</p>
                <ListGroup.Item>Schwarz</ListGroup.Item>
                <br />
                <p>Email:</p>
                <ListGroup.Item>bob@warrior.com</ListGroup.Item>
                <br />
            </ListGroup>
            <Row>
            <Button variant="warning" type="submit">
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
