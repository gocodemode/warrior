import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../utils/base"
import { Form, Button, Container } from 'react-bootstrap';
// import { Link } from "react-router-dom";

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
    async event => {
      event.preventDefault();
      const { email, password} = event.target.elements;
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
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>First Name</Form.Label>
              <Form.Control
                id="firstName"
                type="text"
                name="firstName"
                />
                 <Form.Label>Last Name</Form.Label>
              <Form.Control
                id="lastName"
                type="text"
                name="lastName"
                /> */}
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
            <Button variant="success" type="submit">
              {/* <Link to="/viewworkouts" id="white"> */}
                Sign Up
              {/* </Link> */}
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(Signup);
