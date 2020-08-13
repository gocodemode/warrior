import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const Workout = (props) => {
  return (
    <div>
      <Row>
        <InputGroup>
          <ListGroup>
            <ListGroup.Item>
              {props.name} is meeting at {props.location} for
              {props.description} on this day: .
            </ListGroup.Item>
          </ListGroup>
          <InputGroup.Append>
            <Button variant="outline-secondary">
              <i class="fas fa-calendar-times"></i>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/updateworkout">
                <i class="fas fa-edit"></i>
              </Link>
            </Button>
          </InputGroup.Append>
        </InputGroup>
        </Row>

        
        {/* <Form>
          <Form.Group>
          <Row>
            <Col>
              <Form.Check
                id="Sunday"
                label="Sunday"
                name="Sunday"
                checked={props.Sunday}
              />
            </Col>
            <Col>
              <Form.Check
                id="Monday"
                label="Monday"
                name="Monday"
                checked={props.Monday}
              />
            </Col>
            <Col>
              <Form.Check
                id="Tuesday"
                label="Tuesday"
                name="Tuesday"
                checked={props.Tuesday}
              />
            </Col>
            <Col>
              <Form.Check
                id="Wednesday"
                label="Wednesday"
                name="Wednesday"
                checked={props.Wednesday}
              />
            </Col>
            <Col>
              <Form.Check
                id="Thursday"
                label="Thursday"
                name="Thursday"
                checked={props.Thursday}
              />
            </Col>
            <Col>
              <Form.Check
                id="Friday"
                label="Friday"
                name="Friday"
                checked={props.Friday}
              />
            </Col>
            <Col>
              <Form.Check
                id="Saturday"
                label="Saturday"
                name="Saturday"
                checked={props.Saturday}
              />
            </Col>
            </Row>
          </Form.Group>
        </Form> */}
      
    </div>
  );
};

export default Workout;
