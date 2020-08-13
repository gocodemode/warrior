import React, { Component } from "react";
import  { Container, Row, Button, Form, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import workoutdata from "../components/workoutdata.json";
import Workout from "../components/Workout";

const styles = {
  Row:{
    maxWidth: "100%",
  },
  Button: {
    margin: "0 3px"
  }
};

class ViewWorkouts extends Component {
  
  state = {
    workoutdata,
  };
  componentDidMount() {
    // loadWorkouts();
  }
  // Loads all books and sets them to books
  // function loadWorkouts() {
  //   API.getWorkouts()
  //     .then(res =>
  //       setWorkouts(res.data)
  //     )
  //     .catch(err => console.log(err));
  //     };
  render() {
    return (
      <div>
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
                {this.state.workoutdata.map((filteredworkout) => (
                  <Workout
                    name={filteredworkout.name}
                    description={filteredworkout.description}
                    key={filteredworkout.id}
                    location={filteredworkout.location}
                  
                  />
                ))}
              </Row>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewWorkouts;
