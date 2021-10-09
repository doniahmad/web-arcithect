import React from "react";
import { Container } from "react-bootstrap";
import ProjectList from "../../components/ProjectList/ProjectList";
import Styles from "./ProjectStyles";

function Project() {
  return (
    <Styles>
      <Container>
        <div>
          <h1 className="title">
            Our <br />
            <span>Projects</span>
          </h1>
        </div>
        <div className="main">
          <ProjectList />
        </div>
      </Container>
    </Styles>
  );
}

export default Project;
