import React from "react";
import Styles from "./NavbarStyles";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/Logo.svg";
import { LinkContainer } from "react-router-bootstrap";

function NavbarComp() {
  return (
    <Styles>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="justify-content-center nav-item"
              style={{ flex: 1 }}
            >
              <LinkContainer exact to="/">
                <Nav.Link>HOME</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/gallery">
                <Nav.Link>GALLERY</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/project">
                <Nav.Link>PROJECTS</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/certificate">
                <Nav.Link>CERTIFICATIONS</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/contact">
                <Nav.Link>CONTACTS</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
}

export default NavbarComp;
