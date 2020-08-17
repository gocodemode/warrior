import React from "react";
import { Container, ListGroup, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../utils/base";



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

const MyAccount = () => {
  return (
    <div>
        <Container style={styles.container}>
            <ListGroup>
              <p>First Name:</p>
              <ListGroup.Item>Bobby</ListGroup.Item>
              <br />
              <p>Last Name:</p>
              <ListGroup.Item>Schwarz</ListGroup.Item>
              <br />
              <p>Email Address:</p>
              <ListGroup.Item>bob@warrior.com</ListGroup.Item>
              <br />
            </ListGroup>
            <Row>
              <Col>
              <Button variant="success" type="submit" style={styles.Button}>
                  <Link to="/viewworkouts" id="white">
                      My Workouts
                  </Link>
              </Button>
              </Col>
              <Button variant="danger" type="submit" style={styles.Button} onClick={() => app.auth().signOut()}>
                  <Link to="/" id="white">
                      Sign Out
                  </Link>
              </Button>
            </Row>
            <br />
        </Container>
    </div>
  );
};

export default MyAccount;
