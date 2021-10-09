import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Styles from "./ProjectListStyles";
import listImg1 from "../../assets/projectList/list1.png";
import listImg2 from "../../assets/projectList/list2.png";
import listImg3 from "../../assets/projectList/list3.png";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";

function ProjectList() {
  return (
    <Styles>
      <Container>
        <Row className="list">
          <Col md={6}>
            <Image src={listImg1} fluid />
          </Col>
          <Col md={6}>
            <div className="contain">
              <h1 className="title">Sample Project</h1>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate sunt ea blanditiis ipsum distinctio vel repellat
                deleniti consectetur ducimus modi neque praesentium at nam
                minus, assumenda saepe maxime laboriosam provident. Iste at et
                ipsam velit temporibus. Hic rerum laboriosam voluptate. Ad
                obcaecati adipisci cumque accusantium, architecto vel fugit
                cupiditate culpa.
              </p>
              <Link to="project-1">
                <Button className="btn">
                  View More <Image src={arrow} />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="list">
          <Col md={6}>
            <Image src={listImg2} fluid />
          </Col>
          <Col md={6}>
            <div className="contain">
              <h1 className="title">Sample Project</h1>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate sunt ea blanditiis ipsum distinctio vel repellat
                deleniti consectetur ducimus modi neque praesentium at nam
                minus, assumenda saepe maxime laboriosam provident. Iste at et
                ipsam velit temporibus. Hic rerum laboriosam voluptate. Ad
                obcaecati adipisci cumque accusantium, architecto vel fugit
                cupiditate culpa.
              </p>
              <Link to="project-1">
                <Button className="btn">
                  View More <Image src={arrow} />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="list">
          <Col md={6}>
            <Image src={listImg3} fluid />
          </Col>
          <Col md={6}>
            <div className="contain">
              <h1 className="title">Sample Project</h1>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate sunt ea blanditiis ipsum distinctio vel repellat
                deleniti consectetur ducimus modi neque praesentium at nam
                minus, assumenda saepe maxime laboriosam provident. Iste at et
                ipsam velit temporibus. Hic rerum laboriosam voluptate. Ad
                obcaecati adipisci cumque accusantium, architecto vel fugit
                cupiditate culpa.
              </p>
              <Link to="project-1">
                <Button className="btn">
                  View More <Image src={arrow} />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default ProjectList;
