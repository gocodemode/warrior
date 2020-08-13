import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./style.css";
import WorkoutCard from "../../components/WorkoutCard";

const Contents = () => {
  return (
    <Container>
      <Row id="filterRow">
        <Col sm={2} id="filterCol">
          <DropdownButton
            alignRight
            title="Filter Workout By City"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </Col>
        </Row>
        <Row>
       <WorkoutCard />
       <WorkoutCard />
       <WorkoutCard />
      </Row>
    </Container>
  );
};

export default Contents;
