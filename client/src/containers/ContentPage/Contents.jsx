import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Contents.css";
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


  render() {
    return (
      <div>
      <Container>
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
              name={data.name}
              description={data.description}
            />
          ))}
           {this.state.workoutdata.map((data) => (
            <WorkoutCard
              class="cards"
              location={data.location}
              day={data.daysArray.map((days) => {
                console.log(days)
                if (days.value.isActive === true) {
                  return <div>{days.value.name}</div>
                }
              })}
              name={data.name}
              description={data.description}
            />
          ))}
        </Row>
      </Container>
      </div>
    );
  }
}

export default Contents;
