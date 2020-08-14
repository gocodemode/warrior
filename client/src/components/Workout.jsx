import React from "react";
import { InputGroup, ListGroup, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/workouts";

const styles = {
  ListGroupItem: {
    width: "100%",
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
        <Col>
        <InputGroup>
          <ListGroup style={styles.ListGroupItem} className="d-flex bd-highlight">
            {props.days.map((day) => {
              if (day.value.isActive) {
                return (
                  <>
                  <ListGroup.Item className="p-2 flex-grow-1 bd-highlight">
                    {props.name} is meeting in {props.location}. {props.description}. Session on  {day.value.name}
                  </ListGroup.Item>
                  <InputGroup.Append className="p-2 bd-highlight">
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
                  <br />
                  </>
                );
              }
            })}
          </ListGroup> 
        </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Workout;
