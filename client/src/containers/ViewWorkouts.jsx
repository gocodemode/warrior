import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col"

const styles = {
  Row:{
    maxWidth: "100%",
  },
  ListGroupItem: {
    width: "24em",
  },
  Button: {
    margin: "0 3px"
  }
};

const ViewWorkout = () => {
  return (
    <div>
      <br />
      <Container>
        <Row>
          <Col xs={3}>
            <h1>My Workouts</h1>
          </Col>
          <Col xs={6}/>
          <Col xs={3}>
              <Button variant="warning" style={styles.Button}>
                <Link to="/createworkout">Add Workout</Link>
              </Button>{" "}
              <Button variant="warning" style={styles.Button}>
                <Link to="/myaccount">View My Profile</Link>
              </Button>{" "}
          </Col>
        </Row>
        <br />
        <Row style={styles.Row}>
          <Form>
            <Row>
                {/* Having the List Group Item within the Input Group might not work, but it's better than placeholder text in FormControl. Refer to Input Group and List Group on React Bootstrap */}
              <InputGroup>
                <ListGroup>
                  <ListGroup.Item style={styles.ListGroupItem}>Yoga in Atlanta on Monday 7 PM</ListGroup.Item>
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
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default ViewWorkout;
