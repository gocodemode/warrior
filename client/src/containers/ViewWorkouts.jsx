import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const ViewWorkout = () => {
  return (
    <div>
      <Container>
        <Row>
          <h1>My Workouts</h1>
              <Button variant="success">
                <Link to="/createworkout">Add Workout</Link>
              </Button>{" "}
              <Button variant="success">
                <Link to="/myaccount">View My Profile</Link>
              </Button>{" "}
        </Row>
        <br />
        <Row>
          <Form>
            <Row>
                {/* Having the List Group Item within the Input Group might not work, but it's better than placeholder text in FormControl. Refer to Input Group and List Group on React Bootstrap */}
              <InputGroup>
                <ListGroup>
                  <ListGroup.Item>Yoga in Atlanta on Monday 7 PM</ListGroup.Item>
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
            <br />
            <Row>
            <InputGroup>
                <ListGroup>
                  <ListGroup.Item>Goat Yoga in Savannah on Tuesday 5 PM</ListGroup.Item>
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
            <br />
            <Row>
            <InputGroup>
                <ListGroup>
                  <ListGroup.Item>Rooftop Yoga in Atlanta on Friday 8 PM</ListGroup.Item>
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
            <br />
            <Row>
            <InputGroup>
                <ListGroup>
                  <ListGroup.Item>Garden Yoga in Columbus on Saturday 7 PM</ListGroup.Item>
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
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default ViewWorkout;
