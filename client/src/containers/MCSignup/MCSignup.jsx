import React from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

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

const MCSignup = () => {
  return (
    <Container style={styles.container}>
      <Row id="signupRow">
        <Col sm={8}>
          <Image
            src="https://lh3.googleusercontent.com/proxy/gvg4vLqE1FZGcZgZVGfSdWlQvAbEBxiYAR8Ihgyejhr5Y2VWQoncaIR9oiRnnRUUaahBjLfp97Bd_NButkvoZBUQBkTWkCVqZaGFXdq98vvnLaCPhZfyvoBmQKPb"
            rounded
            fluid
          />
        </Col>
        <Col sm={3} id="signCol">
          <Form
            action="https://wordpress.us9.list-manage.com/subscribe/post"
            method="POST"
          >
            <input type="hidden" name="u" value="2a9ed1ba10a148999ef21733f" />
            <input type="hidden" name="id" value="4522bfac9d" />
            <Form.Group controlId="formBasicEmail">
              <Form.Label id="white">First Name</Form.Label>
              <Form.Control id="MERGE1" type="text" name="MERGE1" />
              <Form.Group controlId="formBasicEmail">
                <Form.Label id="white">Last Name</Form.Label>
                <Form.Control id="MERGE2" type="text" name="MERGE2" />
                <Form.Label id="white">Email address</Form.Label>
                <Form.Control
                  id="MERGE0"
                  type="email"

                  name="MERGE0"
                  // value={email}
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                />
              </Form.Group>
              <Button
                id="subscribe"
                style={{ margin: "10px" }}
                variant="success"
                type="submit"
              >
                Subscribe
              </Button>
              {/* <Link to="/login" id="white">
              Login?
            </Link> */}
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MCSignup;
