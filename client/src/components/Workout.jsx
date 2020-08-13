import React from "react";
import { InputGroup, ListGroup, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const styles = {
  ListGroupItem: {
    width: "24em",
  }
}

const Workout = (props) => {
  return (
    <div>
      <Row>
        <InputGroup>
          <ListGroup>
            <ListGroup.Item style={styles.ListGroupItem}>
              {props.name} is meeting at {props.location} for
              {props.description} on this day: .
            </ListGroup.Item> 
          </ListGroup>
          <InputGroup.Append>
            <Button variant="outline-secondary">
              <i className="fas fa-calendar-times"></i>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/updateworkout">
                <i className="fas fa-edit"></i>
              </Link>
            </Button>
          </InputGroup.Append>
        </InputGroup>
        </Row>
        <br />

        
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
