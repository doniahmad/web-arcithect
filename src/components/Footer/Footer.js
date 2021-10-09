import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Styles from "./FooterStyles";
import logo from "../../assets/footerLogo.svg";
import location from "../../assets/icons/Location.svg";
import phone from "../../assets/icons/Phone.svg";
import email from "../../assets/icons/Email.svg";
import facebook from "../../assets/icons/Facebook.svg";
import twitter from "../../assets/icons/Twitter.svg";
import pinterest from "../../assets/icons/Pinterest.svg";
import linkedin from "../../assets/icons/LinkedIn.svg";

function Footer() {
  return (
    <Styles>
      <section id="footer">
        <Container>
          <Row>
            <Col>
              <Image src={logo} />
            </Col>
            <Col>
              <p class="title">Information</p>
              <ul className="list-unstyled top">
                <li>
                  <a href="/">Main</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/project">Projects</a>
                </li>
                <li>
                  <a href="/certificate">Certifications</a>
                </li>
                <li>
                  <a href="/contact">Contacts</a>
                </li>
              </ul>
            </Col>
            <Col>
              <p class="title">Contacts</p>
              <div className="contacts top">
                <div className="d-flex location list-contacts">
                  <Image src={location} className="icons" />

                  <p className="contacts-label">
                    1234 Sample Street Austin Texas
                  </p>
                </div>
                <div className="d-flex phone list-contacts">
                  <Image src={phone} className="icons" />

                  <p className="contacts-label">02283.8372.922</p>
                </div>
                <div className="d-flex email list-contacts">
                  <Image src={email} className="icons" />

                  <p className="contacts-label">sampleemail@gmail.com</p>
                </div>
              </div>
            </Col>
            <Col>
              <p class="title">Social Media</p>
              <div className="d-flex sosmed top">
                <a href="/" className="sosmed-icon">
                  <Image src={facebook} />
                </a>
                <a href="/" className="sosmed-icon">
                  <Image src={twitter} />
                </a>
                <a href="/" className="sosmed-icon">
                  <Image src={linkedin} />
                </a>
                <a href="/" className="sosmed-icon">
                  <Image src={pinterest} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <div className="copyright">&copy; 2021 All Rights Reversed </div>
      </section>
    </Styles>
  );
}

export default Footer;
