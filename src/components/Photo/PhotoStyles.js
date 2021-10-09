import styled from "styled-components";

const Styles = styled.div`
  .photo {
    width: 13rem;
    height: 16rem;
    float: left;
    background-size: cover;
    background-position: center;
    margin: 0 2rem 2rem 0;
  }

  .photo:hover {
    opacity: 80%;
  }

  .photo-default {
    background-color: grey;
  }
`;

export default Styles;
