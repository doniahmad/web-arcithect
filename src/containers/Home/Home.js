import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Styles from "./HomeStyles";
import lorumProject from "../../assets/projects/landing.png";
import arrow from "../../assets/arrow.svg";
import arrowWhite from "../../assets/arrow-2.svg";
import about from "../../assets/projects/about.svg";
import contactImage from "../../assets/contact.png";
import ProjectComp from "../../components/Project/ProjectComp";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Styles>
      <Container>
        <Row className="landing comp">
          <Col md={4}>
            <h1 className="title title-landing">
              PROJECT
              <br />
              <span>Lorum</span>
            </h1>
          </Col>
          <Col md={8}>
            <div
              className="contain-landing overlay"
              style={{ background: `url(${lorumProject})` }}
            >
              <Link to="/project-1">
                <Button className="btn-landing">
                  View Project <Image src={arrow} />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="about comp">
          <Col className="text-center" md={7}>
            <Image src={about} />
          </Col>
          <Col>
            <h1 className="title">About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Link to="/">
              <Button className="btn-about">
                Read More <Image src={arrow} />
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="focus comp">
          <Col md={12}>
            <h1 className="title title-focus">Main Focus/Mission Statement</h1>
          </Col>
          <Col md={2}>
            <p className="no-focus">1</p>
          </Col>
          <Col md={4}>
            <p className="desc-focus">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </Col>
          <Col md={2}>
            <p className="no-focus">2</p>
          </Col>
          <Col md={4}>
            <p className="desc-focus">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </Col>
        </Row>

        <div className="project comp">
          <div>
            <h1 className="title title-project">Our Projects</h1>
          </div>
          <ProjectComp />
          <Link to="/project">
            <Button className="btn-project float-end">
              All Project <Image src={arrowWhite} />
            </Button>
          </Link>
        </div>
        <Row className="contact">
          <Col md={12}>
            <h1 className="title title-contact">Contact Us</h1>
          </Col>
          <Col md={6}>
            <form action="post">
              <div className="form-field">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-noborder"
                    id="floatingInput"
                    placeholder="Username"
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
              </div>
              <div className="form-field">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control form-noborder"
                    id="floatingInput"
                    placeholder="Username"
                  />
                  <label htmlFor="floatingInput">Phone Number</label>
                </div>
              </div>
              <div className="form-field">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control form-noborder"
                    id="floatingInput"
                    placeholder="Username"
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
              </div>
              <div className="form-field">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-noborder"
                    id="floatingInput"
                    placeholder="Username"
                  />
                  <label htmlFor="floatingInput">Interested In</label>
                </div>
              </div>
              <div className="form-field">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: `100px` }}
                  ></textarea>
                  <label for="floatingTextarea2">Comments</label>
                </div>
              </div>
            </form>
          </Col>
          <Col md={6}>
            <Image src={contactImage} className="img-contact" />
          </Col>
          <Col>
            <Link to={"/"}>
              <Button className="btn-contact">
                Send Email <Image src={arrowWhite} />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default Home;
