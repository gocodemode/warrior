import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';

class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              src="./Images/warrior.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Warrior"
            /> Warrior
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
