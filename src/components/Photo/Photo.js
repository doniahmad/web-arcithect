import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import photo1 from "../../assets/photo/photo1.png";
import photo2 from "../../assets/photo/photo2.png";
import photo3 from "../../assets/photo/photo3.png";
import photo4 from "../../assets/photo/photo4.png";
import photo5 from "../../assets/photo/photo5.png";
import photo6 from "../../assets/photo/photo6.png";
import photo7 from "../../assets/photo/photo7.png";
import photo8 from "../../assets/photo/photo8.png";
import photo9 from "../../assets/photo/photo9.png";
import Styles from "./PhotoStyles";

function Photo() {
  return (
    <Styles>
      <Container>
        <Link to="project-1">
          <div className="photo-default photo"></div>
        </Link>
        <Link to="/project-1">
          <div
            className="photo-1 photo"
            style={{ background: `url(${photo1})` }}
          ></div>
        </Link>
        <Link to="/project-1">
          <div
            className="photo-2 photo"
            style={{ background: `url(${photo2})` }}
          ></div>
        </Link>
        <Link to="/project-1">
          <div
            className="photo-3 photo"
            style={{ background: `url(${photo3})` }}
          ></div>
        </Link>
        <Link to="/project-1">
          <div
            className="photo-4 photo"
            style={{ background: `url(${photo4})` }}
          ></div>
        </Link>
        <Link to="/project-1">
          <div
            className="photo-5 photo"
            style={{ background: `url(${photo5})` }}
          ></div>
        </Link>
        <Link to="/project-1">
          <div
            className="photo-6 photo"
            style={{ background: `url(${photo6})` }}
          ></div>
        </Link>
        <Link to="/project-1">
          <div
            className="photo-7 photo"
            style={{ background: `url(${photo7})` }}
          ></div>
        </Link>
        <Link to="/project-1">
          <div
            className="photo-8 photo"
            style={{ background: `url(${photo8})` }}
          ></div>
        </Link>
        <Link to="/project-1">
          <div
            className="photo-9 photo"
            style={{ background: `url(${photo9})` }}
          ></div>
        </Link>
      </Container>
    </Styles>
  );
}

export default Photo;
