import styled from "styled-components";

const Styles = styled.div`
  .title {
    font-weight: 300;
    font-size: 64px;
    line-height: 64px;
    color: #bdbdbd;
  }

  .title span {
    font-weight: bold;
    font-size: 64px;
    line-height: 64px;
    color: #333333;
  }

  .main {
    margin: 2rem auto;
  }

  .contact {
    line-height: 3rem;
  }

  .company-name {
    font-weight: bold;
    font-size: 18px;
    color: #333333;
  }

  .addres {
    font-weight: 300;
    color: #333333;
  }

  .phone-number {
    font-weight: bold;
    font-size: 18px;
    color: #333;
  }

  .email {
    font-weight: 300;
    color: #333;
  }

  .btn:focus,
  .btn:active {
    box-shadow: none;
  }

  .btn {
    border: none;
    background-color: #333;
    color: #fff;
    font-size: 12px;
    letter-spacing: 0.2em;
    width: 200px;
    height: 71px;
    border-radius: 0px;
    text-transform: uppercase;
  }

  .map {
    height: 480px;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
  }
`;

export default Styles;
