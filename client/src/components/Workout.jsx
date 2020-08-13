import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
// import { Form } from "react-bootstrap";
import API from "../utils/workouts"


const Workout = (props) => {
  console.log("On load", props);

 const deleteWorkout = (id) => {
   console.log("You clicked me.", props);
    API.deleteWorkout(id)
    .then(res => {
      console.log(res.data);
    })
  }
 const updateWorkout = (id) => {
   console.log("You clicked me.", props);
    API.updateWorkout(id)
    .then(res => {
      console.log(res.data);
    })
  }

  return (
    <div>
      <Row>
        <InputGroup>
          <ListGroup>
            {props.days.map((day) => {
              if (day.value.isActive) {
                return (
                  <>
                  <ListGroup.Item>
                    {props.name} is meeting at {props.location} for
                    {props.description} on this day: {day.value.name}
                  </ListGroup.Item>
                  <InputGroup.Append>
                  <Button variant="outline-secondary">
                    <i class="fas fa-calendar-times" onClick={() => {
                    deleteWorkout(props.id);
                    
                    }} ></i>
                  </Button>
                  <Button variant="outline-secondary" onClick={() => {
                    updateWorkout(props.id);
                    
                    }}>
                    <Link to="/updateworkout">
                      <i class="fas fa-edit"></i>
                    </Link>
                  </Button>
                </InputGroup.Append>
                </>
                );
              }
            })}
          </ListGroup>
          
        </InputGroup>
      </Row>

      
    </div>
  );
};

export default Workout;
