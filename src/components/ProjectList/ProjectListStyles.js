import styled from "styled-components";

const Styles = styled.div`
  .list {
    margin: 3rem auto;
  }

  .title {
    font-weight: 300;
    font-size: 40px;
    line-height: 47px;
    color: #bdbdbd;
  }

  .desc {
    font-weight: 300;
    line-height: 25px;
    margin-top: 3rem;
  }

  .contain {
    margin: 1rem;
  }

  .btn {
    border: none;
    margin-top: 2rem;
    background-color: #fff;
    color: #333;
    font-size: 12px;
    letter-spacing: 0.2em;
    width: 170px;
    height: 71px;
    border-radius: 0px;
    text-transform: uppercase;
  }

  .btn:focus,
  .btn:active {
    box-shadow: none;
  }

  .btn img {
    margin-left: 1rem;
  }
`;

export default Styles;
