import React, { Component } from "react";
import { Navbar, Col } from 'react-bootstrap/';
import { Link } from "react-router-dom";
import "./Navbar.css";

const styles = {
  alignRight: { textAlign: "right" },
}

class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Col xs="9">
          <Navbar.Brand href="/">
            <img
              src="./Images/warrior.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Warrior"
            /> Warrior
          </Navbar.Brand>
          </Col>
          <Col style={styles.alignRight}>
            <Link to="/contents" id="yellow">Workouts</Link>
          </Col>
          <Col style={styles.alignRight}>
            <Link to="/login" id="yellow">Instructor Login</Link>
          </Col>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
