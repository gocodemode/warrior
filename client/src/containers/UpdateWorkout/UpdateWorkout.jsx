import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, withRouter, Redirect } from "react-router-dom";
import API from "../../utils/workouts";
import axios from "axios";
// import { Redirect } from "react-router";

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
    name: "",
    // formObject: {
    location: "",
    description: "",
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    redirect: false
    // },
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
        this.setState({ ...res.data });
      })
      .catch((err) => console.log(err));
  };

  // My code in functional
  handleInputChange = (event) => {
    event.preventDefault();
    console.log("changed input to", this.handleInputChange);
    this.setState({ [event.target.name]: event.target.value });
  };

  //Brian's Code in stateful
  // handleInputChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  //   console.log(this.state.searchInput);
  //   this.handleSearchInput();
  // };

  handleCheckboxChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.checked);
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleFormSubmit = (event) => {
    const id = this.props.match.params.id;
    event.preventDefault();
    axios.put(`/api/workouts/${id}`, {name:this.state.name,
        location: this.state.location,
        description: this.state.description,
        Sunday: this.state.Sunday,
        Monday: this.state.Monday,
        Tuesday: this.state.Tuesday,
        Wednesday: this.state.Wednesday,
        Thursday: this.state.Thursday,
        Friday: this.state.Friday,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({redirect: true});
        // return <Redirect to="/viewworkouts" />

     
        // setTimeout(() => {
        //   window.location.reload("/viewworkouts");
        // }, 1500);
      })
      .catch((err) => console.log(err));
  };

  render() {
    if(this.state.redirect) {
      return <Redirect to="/viewworkouts" />
    } 
    return (
      <div>
      
        <Container style={styles.container}>
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              {/* Have Name, Location of Workout and Checked Boxes be updated when sent to Update Workout Page */}
              <Form.Control
                type="text"
                onChange={this.handleInputChange}
                name="name"
                value={this.state.name}
                placeholder={this.state.name}
              />
              <br />
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                onChange={this.handleInputChange}
                name="location"
                value={this.state.location}
                placeholder={this.state.location}
              />
              <br />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={this.handleInputChange}
                name="description"
                value={this.state.description}
                placeholder={this.state.description}
              />
              <br />
              <Form.Label>Date</Form.Label>
              
              <Form.Check
                id="Sunday"
                label="Sunday"
                onChange={this.handleCheckboxChange}
                name="Sunday"
                checked={this.state.Sunday}
              />
              <Form.Check
                id="Monday"
                label="Monday"
                onChange={this.handleCheckboxChange}
                name="Monday"
                checked={this.state.Monday}
              />
              <Form.Check
                id="Tuesday"
                label="Tuesday"
                onChange={this.handleCheckboxChange}
                name="Tuesday"
                checked={this.state.Tuesday}
              />
              <Form.Check
                id="Wednesday"
                label="Wednesday"
                onChange={this.handleCheckboxChange}
                name="Wednesday"
                checked={this.state.Wednesday}
              />
              <Form.Check
                id="Thursday"
                label="Thursday"
                onChange={this.handleCheckboxChange}
                name="Thursday"
                checked={this.state.Thursday}
              />
              <Form.Check
                id="Friday"
                label="Friday"
                onChange={this.handleCheckboxChange}
                name="Friday"
                checked={this.state.Friday}
              />
              <Form.Check
                id="Saturday"
                label="Saturday"
                onChange={this.handleCheckboxChange}
                name="Saturday"
                checked={this.state.Saturday}
              />
              <br />
              <Button variant="success" type="submit">
                {" "}
                Update
              </Button>{" "}
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(UpdateWorkout);
