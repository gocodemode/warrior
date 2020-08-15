import React, { useContext, useState, useCallback } from "react";
import axios from "axios";
import { Form, Button, Container } from 'react-bootstrap';
import UserContext from "../../utils/StatusContext";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import app from "../../utils/base";
import { AuthContext } from "../../utils/Auth";


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

const Login = ({ history }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const user = useContext(UserContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // axios call to login
  //   axios
  //     .post("/api/login", { email: email, password: password })
  //     .then((response) => {
  //       console.log(response.data);
  //       user.handleLogin(response.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/viewworkouts");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/viewworkouts" />;
  }





  return (
    <div>
      <Container style={styles.container}>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
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
              Submit
              {/* </Link> */}
            </Button>
          </Form>
        </Container>     
    </div>
  );
};
export default withRouter(Login);
