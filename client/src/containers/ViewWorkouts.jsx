import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
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

class ViewWorkouts extends Component {
  state = {
    workoutdata : [],
    
    
  };
  
  componentDidMount() {
    // let {id} = useParams();
    this.loadWorkouts();
  }
  // Loads all workouts and sets them to workoutdata
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
          <Row style={styles.centertext}>
            <h1 >My Workouts</h1>
            </Row>
            <Row>
            <Col>
            <Button variant="success" className="fromtop">
              <Link to="/createworkout">Add Workout</Link>
            </Button>{" "}
            </Col>
            <Col>
            <Button variant="success">
              <Link to="/myaccount">View My Profile</Link>
            </Button>{" "}
            </Col>
            <Col></Col>
          </Row>
          <br />
          <Row>
            <Form>
              {/* Having the List Group Item within the Input Group might not work, but it's better than placeholder text in FormControl. Refer to Input Group and List Group on React Bootstrap */}

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
