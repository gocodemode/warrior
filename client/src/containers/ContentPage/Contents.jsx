import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./style.css";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import API from "../../utils/workouts";

class Contents extends Component {
  state = {
    location: [],
    eventKey: "",
    workoutdata: []
  };

  componentDidMount() {
    this.loadWorkouts()
    this.handleSelect();
  }

  loadWorkouts = () => {
    API.getWorkouts()
      .then(res => {
        console.log(res.data);
        this.setState({workoutdata: res.data});
        
      }) 
      .catch(err => console.log(err));
  };

  handleSelect = (event) => {
    console.log(event);
    
    API.getWorkoutLocation(event)
      .then((res) => {
      
        console.log(res.data);
        this.setState({ location: res.data });
        
        console.log({ location: res.data });
      })
      .then((res) => {
        this.setState({workoutdata: []});
      })

      .catch((err) => console.log(err));
  };

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
      <Container id="contents">
        <Row id="filterRow">
          <Col sm={2} id="filterCol">
            <DropdownButton
              alignRight
              title="Filter Workout By City"
              id="dropdown-menu-align-right"
              onSelect={this.handleSelect}
            >
              <Dropdown.Item eventKey="Atlanta">Atlanta</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Augusta">Augusta</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Columbus">Columbus</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Savannah">Savannah</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          {this.state.location.map((data) => (
            <WorkoutCard
              class="cards"
              location={data.location}
              // day={data.daysArray.value.name}
              name={data.name}
              description={data.description}
            />
          ))}
           {this.state.workoutdata.map((data) => (
            <WorkoutCard
              class="cards"
              location={data.location}
              // day={data.daysArray.value.name}
              name={data.name}
              description={data.description}
            />
          ))}
          {/* <WorkoutCard class="cards" />
       <WorkoutCard class="cards" />
       <WorkoutCard class="cards" />
       <WorkoutCard class="cards" />
       <WorkoutCard class="cards" />
       <WorkoutCard class="cards" /> */}
        </Row>
      </Container>
    );
  }
}

export default Contents;
