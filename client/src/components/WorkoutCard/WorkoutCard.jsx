import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./style.css";


const WorkoutCard = (props) => {
  return (
    <Col sm={4}>
    <Card className= "grow" id="workoutCard" style={{ width: "18rem" }} style={{margin: "15px"}}>
      <Card.Img id="cardImage" variant="top" src="/Images/yogaonroof.jpg" />
      <Card.Body>
        <Card.Title id="title">{props.name}</Card.Title>
        <Card.Text id="cardText">
         About:  {props.description } 
         Location: {props.location}
         This Workout Occurs on {props.day}
        </Card.Text>
        <Button id= "button" variant="primary" block>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default WorkoutCard;
