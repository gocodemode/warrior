import React, { useContext, useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import UserContext from "../utils/StatusContext";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios call to login
    axios
      .post("/api/login", { email: email, password: password })
      .then((response) => {
        console.log(response.data);
        user.handleLogin(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }


  return (
    <div>
      <Container>
          <Form>
            <Form.Group controlId="formBasicEmail" onSubmit={handleSubmit}>
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }} />
            </Form.Group>
            <Button variant="success" type="submit">
              <Link to="/viewworkouts">
              Submit
              </Link>
            </Button>
          </Form>
        </Container>     
    </div>
  );
};
export default Login;
