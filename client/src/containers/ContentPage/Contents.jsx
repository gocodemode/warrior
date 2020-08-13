import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./style.css";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";

const Contents = () => {
  return (
    <Container id="contents">
      <Row id="filterRow">
        <Col sm={2} id="filterCol">
          <DropdownButton
            alignRight
            title="Filter Workout By City"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1">Atlanta</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">Augusta</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3">Columbus</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Savannah</Dropdown.Item>
          </DropdownButton>
        </Col>
        </Row>
        <Row>
       <WorkoutCard class="cards" />
       <WorkoutCard class="cards" />
       <WorkoutCard class="cards" />
       <WorkoutCard class="cards" />
       <WorkoutCard class="cards" />
       <WorkoutCard class="cards" />
      </Row>
    </Container>
  );
};

export default Contents;
