import React, { Component } from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



class Home extends Component {
  render() {
    window.Appcues.identify("firstName");
    return (
      <div>
        <Container id="one">
          <Row>
            <Col xs={{ span: 8, offset: 2 }}> 
              <div id="serenity">
                <Row>
                  <Col xs="5" id="suave">
                    <h3>Welcome to Warrior</h3> 
                    <h5>Workout with a supportive community that always strives to B.E.S.A.F.E.</h5>
                    <Button variant="warning">
                      <Link to="/contents" id="white">
                        View Workouts
                      </Link>
                    </Button>{' '}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
