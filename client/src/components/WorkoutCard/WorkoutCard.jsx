import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./style.css";


const WorkoutCard = (props) => {
  return (
    <Col sm={4}>
    <Card className= "grow" id="workoutCard" style={{ width: "18rem" }} style={{margin: "15px"}}>
      <Card.Img id="cardImage" variant="top" src="/Images/yogaonroof.jpg" />
      <Card.Body>
        <Card.Title id="title">{props.name}</Card.Title>
        <Card.Text id="cardText">
         <strong>About:</strong> 
         <br></br>
         {props.description } 
         <br></br>
         <strong>Location:</strong>
         <br></br>
         {props.location}
         <br></br>
         <strong>Day of the Week:</strong> 
         <br></br>
         {props.day}
         <br></br>
         Subscribe to our mailing list for future workouts!
        </Card.Text>
        <Button id= "button" variant="primary" block>
          <Link to ="/subscribe" id="white">Subscribe</Link>
        
        </Button>
        
      </Card.Body>
    </Card>
    </Col>
  );
};

export default WorkoutCard;
