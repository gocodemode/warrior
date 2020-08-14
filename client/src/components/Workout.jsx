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
 const updateWorkout = (workoutdata,id) => {
   console.log("You clicked me.", props);
   console.log(id);
    API.updateWorkout(workoutdata,id)
    .then(res => {
      API.getWorkouts()
      .then(res => {
        console.log(res.data);
        this.setState({workoutdata: res.data});
      }) 
      .catch(err => console.log(err));
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
                    {props.name} is meeting at {props.location} for
                    {props.description} on this day: {day.value.name}
                  </ListGroup.Item>
                  <InputGroup.Append>
                  <Button variant="outline-secondary">
                    <i class="fas fa-calendar-times" onClick={() => {
                    deleteWorkout(props.id);
                    
                    }} ></i>
                  </Button>
                  <Button variant="outline-secondary" >
                    <Link to = {`/updateworkout/${props.id}`}>
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
