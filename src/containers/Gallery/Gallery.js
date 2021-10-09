import React from "react";
import { Container } from "react-bootstrap";
import Photo from "../../components/Photo/Photo";
import Styles from "./GalleryStyles";

function Gallery() {
  return (
    <Styles>
      <Container>
        <div>
          <h1 className="title">
            Photo <br />
            <span>Gallery</span>
          </h1>
        </div>
        <div className="main">
          <Photo />
        </div>
      </Container>
    </Styles>
  );
}

export default Gallery;
