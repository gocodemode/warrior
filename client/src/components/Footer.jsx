import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  footer: {
    position: "fixed",
    left: 0,
    marginTop: "3em",
    bottom: 0,
    width: "100%",
    backgroundColor: "#E5E5E5",
    color: "black",
  },
  alignRight: { textAlign: "right" },
  alignLeft: { textAlign: "left" },
  brim : {
    marginTop: "3em",
  }
};

const Footer = () => {
  return (
    <div>
      <div style={styles.brim}>
        <Footer style={styles.footer}>
          <Container>
            <Row>
              <Col>
                <p>Copyright © KGB-C </p>
              </Col>
              <Col style={styles.alignRight}>
                <Link to="/login">Instructor ?</Link>
              </Col>
            </Row>
          </Container>
        </Footer>
      </div>
    </div>
  );
};

export default Footer;
