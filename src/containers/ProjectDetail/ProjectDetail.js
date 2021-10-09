import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Styles from "./ProjectDetailStyles";
import headImg from "../../assets/ProjectDetail/Project1/project1-head.png";
import midImg from "../../assets/ProjectDetail/Project1/project1-mid.png";
import botImg from "../../assets/ProjectDetail/Project1/project1-bot.png";

function ProjectDetail() {
  return (
    <Styles>
      <Container>
        <div>
          <h1 className="title">
            Sample <br />
            <span>Project 1</span>
          </h1>
        </div>
        <div className="main">
          <div className="header-img">
            <Image src={headImg} />
          </div>
          <Row>
            <Col md={4} className="col">
              <Image src={midImg} />
            </Col>
            <Col md={8} className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati magnam odit ipsam cum porro fuga. In quidem, harum
                exercitationem voluptates nemo pariatur quaerat? Voluptatem
                natus minima dolorum deleniti, recusandae debitis voluptas
                quibusdam autem voluptatibus! Quas natus porro labore
                necessitatibus quae officiis, consequatur libero tempore sit
                quia debitis aperiam optio architecto facilis numquam fugiat
                doloremque inventore assumenda repudiandae nisi exercitationem
                maiores ducimus! Pariatur porro magni aliquid? Quod mollitia
                veritatis officia iure ipsa nulla aut id quo quos asperiores
                animi, natus repellendus consectetur iusto error reprehenderit
                in adipisci perferendis! Sed, ullam voluptate. Optio sunt id
                porro, eligendi doloremque repellat aliquam, amet dolor error
                debitis ipsum facere eaque voluptas, quos labore temporibus
                laudantium veniam. Excepturi culpa hic quae rerum? Hic
                necessitatibus ut praesentium officiis soluta dicta culpa ea
                rerum illo alias consequatur omnis, suscipit laudantium
                provident facilis sequi. Voluptas quam vero eveniet sed alias
                explicabo similique. Beatae dolorum rem asperiores aut ab quo
                corrupti distinctio nisi aliquid doloribus non odio culpa iste
                commodi exercitationem suscipit veritatis voluptatem, voluptate
                incidunt deleniti veniam vel temporibus amet? Consequuntur
                laboriosam impedit voluptas, ea atque sapiente assumenda, odit
                ipsum voluptates vel et molestias eaque debitis sint quod? Illo
                ad quaerat ipsa ipsam ratione aliquid fugit maiores quis quos!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                cum, facilis dignissimos esse, placeat in totam fugit est ipsam
                id ut recusandae excepturi voluptatibus, laborum ex magnam harum
                voluptas! Reprehenderit alias eum totam dicta quas quod
                voluptate delectus in nihil eos repellendus praesentium maiores
                incidunt non iusto optio ut cumque dolore, debitis aut, laborum
                esse quasi officia! Deserunt unde quae ullam similique nisi
                necessitatibus fugiat quisquam explicabo aperiam adipisci magni
                earum minima, assumenda reprehenderit nihil placeat
                perspiciatis, delectus voluptates a dicta rerum, qui rem
                possimus tenetur. Minus, dolores. Eveniet iusto dicta quia
                mollitia itaque vero non numquam maiores nihil molestiae!
              </p>
            </Col>
            <Col>
              <Image src={botImg} />
            </Col>
          </Row>
        </div>
      </Container>
    </Styles>
  );
}

export default ProjectDetail;
