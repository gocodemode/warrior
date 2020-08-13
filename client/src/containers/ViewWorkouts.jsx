import React, { Component } from "react";
import  { Container, Row, Button, Form, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Workout from "../components/Workout";
import API from "../utils/workouts";

const styles = {
  center: {
    width: "500px",
    margin: "0 auto",  
  },
  centerText: {
    textAlign: "center"
  },
  Row:{
    maxWidth: "100%"
  },
  Button: {
    margin: "0 3px"
  },
}

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
          <Row style={styles.centerText}>
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
              <Row>
                <Col>
                {this.state.workoutdata.map((filteredworkout) => (
                  <Workout
                    name={filteredworkout.name}
                    description={filteredworkout.description}
                    id={filteredworkout._id}
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
