import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const WorkoutCard = () => {
  return (
    <Col sm={4}>
    <Card style={{ width: "18rem" }} style={{margin: "5px"}}>
      <Card.Img variant="top" src="/Images/yogaonroof.jpg" />
      <Card.Body>
        <Card.Title>Yoga on the Roof</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default WorkoutCard;
