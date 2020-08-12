import React, { Component } from "react";
// import { Container } from "react-bootstrap";
import "./Home.css";

const styles = {
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
};
class Home extends Component {
  render() {
    return (
      <div>
        {/* <Container > */}

        <img
          src="/images/yoga.png"
          style={styles.image}
          alt="woman-doing-yoga"
        />
        <div class="content">
    <h1>Heading</h1>
    <p>Lorem ipsum..</p>
  </div>

        {/* </Container> */}
      </div>
    );
  }
}

export default Home;
