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
        <Navbar bg="dark" variant="dark">
          <Col>
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
            <Link to="/contents" id="white">Workouts</Link>
          </Col>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
