import React, { useCallback } from "react";
import { withRouter } from "react-router";
<<<<<<< HEAD
import app from "../../utils/base"
import { Form, Button, Container } from 'react-bootstrap';
// import { Link } from "react-router-dom";
=======
import app from "../../utils/base";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
>>>>>>> 07b817e23ce627f420da2ab4cf17af3b4cd11303

const styles = {
  container: {
    marginTop: 100,
    marginBottom: 150,
    marginLeft: "auto",
    marginRight: "auto",
    border: "10px solid #df6d3e",
    backgroundColor: "#df6d3e",
    padding: 30,
  },
};

const Signup = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/viewworkouts");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <div>
        <Container style={styles.container}>
          <Row id="signupRow">
            <Col sm={8}>
            <Image src="/Images/instructor.jpeg" rounded />
            </Col>
            <Col sm={3} id="signCol">
              <Form onSubmit={handleSignUp}>
                <Form.Group controlId="formBasicEmail">
                 
                  <Form.Label>Name</Form.Label>
                  <Form.Control id="lastName" type="text" name="name" />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    id="email"
                    type="text"
                    name="email"
                    // value={email}
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    id="password"
                    type="password"
                    name="password"
                    // value={password}
                    // onChange={(e) => {
                    //   setPassword(e.target.value);
                    // }}
                  />
                </Form.Group>
                <Button id="signup" style={{margin: "10px"}} variant="success" type="submit">
                 Sign Up
                </Button>
                <Link to="/login" id="white">Login?</Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(Signup);
