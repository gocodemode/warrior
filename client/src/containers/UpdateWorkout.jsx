import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, withRouter } from "react-router-dom";
import API from "../utils/workouts";


const styles = {
  container: {
    marginTop: 25,
    border: "10px solid #df6d3e",
    backgroundColor: "#dfab9e",
  },
};

class UpdateWorkout extends Component {
  state = {
    workoutdata: [],
    // id: workoutdata._id
  };

  
  componentDidMount() {
    const id  = this.props.match.params.id;
    console.log(id);
    this.loadWorkout(id);
  }

  loadWorkout = (id) => {
      console.log(id);
    API.getWorkout(id)
      .then((res) => {
        console.log(res.data);
        this.setState({ workoutdata: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Container style={styles.container}>
          <Form >
            <Form.Group>
              <Form.Label>Name</Form.Label>
              {/* Have Name, Location of Workout and Checked Boxes be updated when sent to Update Workout Page */}
              <Form.Control type="text" placeholder={this.state.workoutdata.name} />
              <br />
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder={this.state.workoutdata.location}
              />
              <br />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder={this.state.workoutdata.description}
              />
              <br />
              <Form.Label>Date</Form.Label>
              <p>This workout was previously scheduled on {}</p>
              <Form.Check id="Sunday" label="Sunday" />
              <Form.Check id="Monday" label="Monday" />
              <Form.Check id="Tuesday" label="Tuesday" />
              <Form.Check id="Wednesday" label="Wednesday" />
              <Form.Check id="Thursday" label="Thursday" />
              <Form.Check id="Friday" label="Friday" />
              <Form.Check id="Saturday" label="Saturday"></Form.Check>
              <br />
              <Button variant="success" handleSubmit>
                <Link to="/viewworkouts">Update</Link>
              </Button>{" "}
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default  withRouter(UpdateWorkout);
