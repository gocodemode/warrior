import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, withRouter } from "react-router-dom";
import API from "../../utils/workouts";

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
    formObject: {
      name: "",
      location: "",
      description: "",
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
    },
  };

  componentDidMount() {
    const id = this.props.match.params.id;
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


  handleInputChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({ ...this.state.formObject, [name]: value });
  };

  handleCheckboxChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.checked);
    this.setState({
      ...this.state.formObject,
      [e.target.name]: e.target.checked,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.updateWorkout({
      name: this.state.formObject.name,
      location: this.state.formObject.location,
      description: this.state.formObject.description,
      daysArray: [
        { value: { isActive: this.state.formObject.Sunday, name: "Sunday" } },
        { value: { isActive: this.state.formObject.Monday, name: "Monday" } },
        { value: { isActive: this.state.formObject.Tuesday, name: "Tuesday" } },
        {
          value: {
            isActive: this.state.formObject.Wednesday,
            name: "Wednesday",
          },
        },
        {
          value: { isActive: this.state.formObject.Thursday, name: "Thursday" },
        },
        { value: { isActive: this.state.formObject.Friday, name: "Friday" } },
        {
          value: { isActive: this.state.formObject.Saturday, name: "Saturday" },
        },
      ],
    })
    .then(() => { setTimeout(() => {
      window.location.replace("/viewworkouts");
    }, 1500);} )
    .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Container style={styles.container}>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              {/* Have Name, Location of Workout and Checked Boxes be updated when sent to Update Workout Page */}
              <Form.Control
                type="text"
                onChange={this.handleInputChange}
                name="name"
                value={this.state.formObject.name}
                placeholder={this.state.workoutdata.name}
              />
              <br />
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                onChange={this.handleInputChange}
                name="location"
                value={this.state.formObject.location}
                placeholder={this.state.workoutdata.location}
                
              />
              <br />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={this.handleInputChange}
                name="description"
                value={this.state.formObject.description}
                placeholder={this.state.workoutdata.description}
              />
              <br />
              <Form.Label>Date</Form.Label>
              <p>This workout was previously scheduled on {}</p>
              <Form.Check
                id="Sunday"
                label="Sunday"
                onChange={this.handleCheckboxChange}
                name="Sunday"
                checked={this.state.formObject.Sunday}
              />
              <Form.Check
                id="Monday"
                label="Monday"
                onChange={this.handleCheckboxChange}
                name="Monday"
                checked={this.state.formObject.Monday}
              />
              <Form.Check
                id="Tuesday"
                label="Tuesday"
                onChange={this.handleCheckboxChange}
                name="Tuesday"
                checked={this.state.formObject.Tuesday}
              />
              <Form.Check
                id="Wednesday"
                label="Wednesday"
                onChange={this.handleCheckboxChange}
                name="Wednesday"
                checked={this.state.formObject.Wednesday}
              />
              <Form.Check
                id="Thursday"
                label="Thursday"
                onChange={this.handleCheckboxChange}
                name="Thursday"
                checked={this.state.formObject.Thursday}
              />
              <Form.Check
                id="Friday"
                label="Friday"
                onChange={this.handleCheckboxChange}
                name="Friday"
                checked={this.state.formObject.Friday}
              />
              <Form.Check
                id="Saturday"
                label="Saturday"
                onChange={this.handleCheckboxChange}
                name="Saturday"
                checked={this.state.formObject.Saturday}
              />
              <br />
              <Button variant="success" onClick={this.handleFormSubmit}>
                <Link to="/viewworkouts" id="white">
                  Update
                </Link>
              </Button>{" "}
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(UpdateWorkout);
