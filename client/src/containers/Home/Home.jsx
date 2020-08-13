import React, { Component } from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



class Home extends Component {
  render() {
    window.Appcues.identify("firstName");
    return (
      <div>
        <Container>
          <Row>
            <Col xs={{ span: 8, offset: 2 }}> 
              <div id="serenity">
                <Row>
                  <Col xs="4" id="suave">
                    <h5>Welcome to Warrior. Workout with a supportive community that always strives to B.E.S.A.F.E.</h5>
                    <Button variant="warning">
                      <Link to="/viewworkouts" id="white">
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
