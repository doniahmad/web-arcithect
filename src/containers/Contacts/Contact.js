import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Styles from "./ContactStyles";
import map from "../../assets/map.png";

function Contact() {
  return (
    <Styles>
      <Container>
        <Row>
          <Col md={4}>
            <div>
              <h1 className="title">
                Contact <br />
                <span>Information</span>
              </h1>
            </div>
            <div className="main">
              <div className="contact">
                <h4 className="company-name">Company Name</h4>
                <p className="addres">1234 Sample Street Austin Texas 76401</p>
                <p className="phone-number">512.333.2222</p>
                <p className="email">sampleemail@gmail.com</p>
              </div>
              <Button>Contact Us</Button>
            </div>
          </Col>
          <Col md={8}>
            <div
              className="map"
              style={{ backgroundImage: `url(${map})` }}
            ></div>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default Contact;
