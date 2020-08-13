import React from "react";
import { InputGroup, ListGroup, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/workouts"

const styles = {
  ListGroupItem: {
    width: "36em",
  }
}


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
          <ListGroup style={styles.ListGroupItem}>
            {props.days.map((day) => {
              if (day.value.isActive) {
                return (
                  <>
                  <ListGroup.Item>
                    {props.name} is meeting at {props.location} for {props.description} on this day: {day.value.name}
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
