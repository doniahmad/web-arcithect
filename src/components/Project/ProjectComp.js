import React from "react";
import { Image } from "react-bootstrap";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import project5 from "../../assets/projects/project5.png";
import arrowWhite from "../../assets/arrow-2.svg";
import Styles from "./ProjectStyles";
import { Link } from "react-router-dom";

function ProjectComp() {
  return (
    <Styles>
      <div className="project-element">
        <div
          className="overlay  project-1"
          style={{
            background: `url(${project1})`,
            backgroundSize: `cover`,
          }}
        >
          <div className="project-contain">
            <div className="text-contain">
              <p>Sample Project</p>
              <Link to="/project-1">
                View More
                <Image src={arrowWhite} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="project-element">
        <div
          className="overlay  project-2"
          style={{
            background: `url(${project2})`,
            backgroundSize: `cover`,
          }}
        >
          <div className="project-contain">
            <div className="text-contain">
              <p>Sample Project</p>
              <Link to="/project-1">
                View More
                <Image src={arrowWhite} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="project-element">
        <div
          className="overlay  project-3"
          style={{
            background: `url(${project3})`,
            backgroundSize: `cover`,
          }}
        >
          <div className="project-contain">
            <div className="text-contain">
              <p>Sample Project</p>
              <Link to="/project-1">
                View More
                <Image src={arrowWhite} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="project-element">
        <div
          className="overlay  project-4"
          style={{
            background: `url(${project4})`,
            backgroundSize: `cover`,
          }}
        >
          <div className="project-contain">
            <div className="text-contain">
              <p>Sample Project</p>
              <Link to="/project-1">
                View More
                <Image src={arrowWhite} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="project-element">
        <div
          className="overlay  project-5"
          style={{
            background: `url(${project5})`,
            backgroundSize: `cover`,
          }}
        >
          <div className="project-contain">
            <div className="text-contain">
              <p>Sample Project</p>
              <Link to="/project-1">
                View More
                <Image src={arrowWhite} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default ProjectComp;
