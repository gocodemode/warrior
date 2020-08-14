import React, { useContext, useState } from "react";
import axios from "axios";
import { Form, Button, Container } from 'react-bootstrap';
import UserContext from "../../utils/StatusContext";
import { Link } from "react-router-dom";


const styles = {
  container: {
      marginTop: 100,
      marginBottom: 150,
      marginLeft: "auto",
      marginRight: "auto",
      border: "10px solid #df6d3e",
      backgroundColor: "#df6d3e"
  },
};

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
      <Container style={styles.container}>
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
              <Link to="/viewworkouts" id="white">
              Submit
              </Link>
            </Button>
          </Form>
        </Container>     
    </div>
  );
};
export default Login;
