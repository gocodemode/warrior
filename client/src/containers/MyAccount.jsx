import React from "react";
import { Container, ListGroup, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const styles = {
  container: {
      marginTop: 25,
      border: "10px solid #df6d3e",
      backgroundColor: "#dfab9e"
  },
};

const MyAccount = () => {
  return (
    <div>
        <Container style={styles.container}>
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
            <br />
        </Container>
    </div>
  );
};

export default MyAccount;
