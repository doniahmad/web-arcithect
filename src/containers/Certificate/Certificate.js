import React from "react";
import { Container } from "react-bootstrap";
import Styles from "./CertificateStyles";

function Certificate() {
  return (
    <Styles>
      <Container>
        <div>
          <h1 className="title">
            COMPANY <br />
            <span>Certifications</span>
          </h1>
        </div>
        <div className="main"></div>
      </Container>
    </Styles>
  );
}

export default Certificate;
