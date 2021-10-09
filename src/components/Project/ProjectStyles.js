import styled from "styled-components";

const Styles = styled.div`
  .project-element {
    float: left;
    display: block;
    margin: 0 2rem 2rem 0;
  }

  .project-contain {
    background-color: #333333;
    height: 255px;
    opacity: 0;
  }

  .text-contain {
    padding: 2em;
    padding-left: 2em;
    color: white;
  }

  .text-contain p {
    font-weight: bold;
    font-size: 64px;
    line-height: 64px;
    width: 16rem;
  }

  .text-contain a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .text-contain a img {
    margin-left: 1rem;
  }

  .project-1 {
    width: 570px;
    height: 255px;
  }

  .project-2 {
    width: 570px;
    height: 255px;
  }

  .project-3 {
    width: 270px;
    height: 255px;
  }

  .project-4 {
    width: 470px;
    height: 255px;
  }

  .project-5 {
    width: 370px;
    height: 255px;
  }

  .project-1:hover .project-contain {
    opacity: 1;
    background-color: rgba(51, 51, 51, 80%);
  }

  .project-2:hover .project-contain {
    opacity: 1;
    background-color: rgba(51, 51, 51, 80%);
  }

  .project-3:hover .project-contain {
    opacity: 1;
    background-color: rgba(51, 51, 51, 80%);
  }

  .project-4:hover .project-contain {
    opacity: 1;
    background-color: rgba(51, 51, 51, 80%);
  }

  .project-5:hover .project-contain {
    opacity: 1;
    background-color: rgba(51, 51, 51, 80%);
  }
`;
export default Styles;
