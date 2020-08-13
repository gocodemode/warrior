import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./style.css";


const WorkoutCard = (props) => {
  return (
    <Col sm={4}>
    <Card id="workoutCard" style={{ width: "18rem" }} style={{margin: "5px"}}>
      <Card.Img id="cardImage" variant="top" src="/Images/yogaonroof.jpg" />
      <Card.Body>
        <Card.Title id="title">Yoga on the Roof</Card.Title>
        <Card.Text id="cardText">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button id= "button" variant="primary" block>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default WorkoutCard;
