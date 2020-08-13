import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import workoutdata from "../components/workoutdata.json";
import Workout from "../components/Workout";
// import axios from "axios";
import API from "../utils/workouts";

class ViewWorkouts extends Component {
  state = {
    workoutdata
  };
  // componentDidMount() {
  //   this.loadWorkouts();
  // }
  // // Loads all books and sets them to books
  // loadWorkouts = () => {
  //   API.getWorkouts()
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({workoutdata: res.data});
        
  //     }) 
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>My Workouts</h1>
            <Button variant="success" class="fromtop">
              <Link to="/createworkout">Add Workout</Link>
            </Button>{" "}
            <Button variant="success">
              <Link to="/myaccount">View My Profile</Link>
            </Button>{" "}
          </Row>
          <br />
          <Row>
            <Form>
              {/* Having the List Group Item within the Input Group might not work, but it's better than placeholder text in FormControl. Refer to Input Group and List Group on React Bootstrap */}

              <Row>
                {this.state.workoutdata.map((filteredworkout) => (
                  <Workout
                    name={filteredworkout.name}
                    description={filteredworkout.description}
                    key={filteredworkout.id}
                    location={filteredworkout.location}
                    days={filteredworkout.DaysArray}
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
