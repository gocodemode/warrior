import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  footer: {
    position: "fixed",
    left: 0,
    height: "35px",
    bottom: 0,
    width: "100%",
    backgroundColor: "#000",
    color: "#f29c13",
    marginTop: "auto",
  },
};

const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        <Container>
          <Row>
            <Col>
              &copy;{new Date().getFullYear()} KGB-C | All Rights Reserved
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
