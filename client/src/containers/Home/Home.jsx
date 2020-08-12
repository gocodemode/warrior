import React, { Component } from "react";
// import { Container } from "react-bootstrap";
import "./Home.css";

const styles = {
    image: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%"
    }
}
class Home extends Component {
  
  render() {
    window.Appcues.identify("firstName")
    return (
      <div  >
        {/* <Container > */}
        
              
            
            <img src="/images/yoga.png" style={styles.image} alt="woman-doing-yoga" />
         
        {/* </Container> */}
      </div>
    );
  }
}

export default Home;
