import React, { Component } from "react";
import  { Container, Row, Button, Form, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
// import workoutdata from "../components/workoutdata.json";
import Workout from "../components/Workout";
// import axios from "axios";
import API from "../utils/workouts";

const styles = {
  center: {
    width: "500px",
    margin: "0 auto"  
  },
  centertext: {
    textAlign: "center"
  }
}

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
    workoutdata : []
  };
  componentDidMount() {
    this.loadWorkouts();
  }
  // Loads all books and sets them to books
  loadWorkouts = () => {
    API.getWorkouts()
      .then(res => {
        console.log(res.data);
        this.setState({workoutdata: res.data});
        
      }) 
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>          
        <Container style={styles.center}>
          <Row>
            <h1 >My Workouts</h1>
            </Row>
            <Row>
            <Col>
            <Button variant="success" style={styles.Button}>
              <Link to="/createworkout">Add Workout</Link>
            </Button>{" "}
            </Col>
            <Col>
            <Button variant="success" style={styles.Button}>
              <Link to="/myaccount">View My Profile</Link>
            </Button>{" "}
            </Col>
            <Col></Col>
          </Row>
          <br />
          <Row style={styles.Row}>
            <Form>
              {/* Having the List Group Item within the Input Group might not work, but it's better than placeholder text in FormControl. Refer to Input Group and List Group on React Bootstrap */}

              <Row>
                <Col>
                {this.state.workoutdata.map((filteredworkout) => (
                  <Workout
                    name={filteredworkout.name}
                    description={filteredworkout.description}
                    key={filteredworkout.id}
                    location={filteredworkout.location}
                    days={filteredworkout.daysArray}
                  />
                ))}
                </Col>
              </Row>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewWorkouts;
