import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#E5E5E5",
    color: "black",
  },
  alignRight: { textAlign: "right" },
  alignLeft: { textAlign: "left" },
};

const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
          <Container>

        <Row>
          <Col >
            <p>Copyright © KGB-C </p>
          </Col>

          <Col style={styles.alignRight}><Link>Instructor ?</Link></Col>
        </Row>
          </Container>
      </footer>
    </div>
  );
};

export default Footer;
