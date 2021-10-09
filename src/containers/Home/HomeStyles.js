import styled from "styled-components";

const Styles = styled.div`
  .comp {
    margin-top: 3rem;
  }

  .btn:focus,
  .btn:active {
    box-shadow: none;
  }

  .title {
    font-weight: 300;
    font-size: 64px;
    line-height: 64px;
    color: #bdbdbd;
  }

  .title-landing {
    margin-top: 80%;
  }

  .title span {
    font-weight: bold;
    font-size: 64px;
    line-height: 64px;
    color: #333333;
  }

  .btn-landing {
    transition: 0.35s;
    opacity: 0;
    margin-top: 100%;
    border: none;
    background-color: #fff;
    color: #333;
    font-size: 12px;
    letter-spacing: 0.2em;
    width: 220px;
    height: 71px;
    border-radius: 0px;
    text-transform: uppercase;
  }

  .btn-landing:focus {
    box-shadow: none;
    outline: none;
  }

  .contain-landing {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 829px;
    width: 770px;
  }

  .contain-landing:hover .btn-landing {
    opacity: 1;
  }

  // about
  .about {
    margin: 10rem auto;
  }

  .about p {
    font-weight: 300;
    margin-top: 20px;
  }

  .btn-about {
    border: none;
    margin-top: 20px;
    background-color: #fff;
    color: #333;
    font-size: 12px;
    letter-spacing: 0.2em;
    width: 170px;
    height: 71px;
    border-radius: 0px;
    text-transform: uppercase;
  }

  // focus
  .no-focus {
    font-weight: 900;
    font-size: 190px;
    color: #f2f2f2;
    text-align: center;
  }

  .desc-focus {
    font-size: 22px;
    color: #333333;
    line-height: 36px;
    margin-top: 20%;
    width: 400px;
  }

  // project
  .project {
    margin-top: 5rem;
    margin-bottom: 5rem;
    overflow: hidden;
  }

  .title-project {
    padding-bottom: 3rem;
  }

  .btn-project {
    border: none;
    background-color: #333;
    color: #fff;
    font-size: 12px;
    letter-spacing: 0.2em;
    width: 200px;
    height: 71px;
    border-radius: 0px;
    margin-right: 7.5rem;
    text-transform: uppercase;
  }

  // contact
  .contact {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  form {
    margin-top: 1.5rem;
  }

  .form-field .form-floating {
    color: #8d8d8d;
    margin-top: 1rem;
  }

  .form-field .form-floating input:focus,
  textarea:focus {
    box-shadow: none;
    outline: none;
    border: none;
  }

  .form-floating input:-webkit-autofill,
  .form-floating input:-webkit-autofill:hover,
  .form-floating input:-webkit-autofill:focus,
  .form-floating input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  .form-floating input,
  textarea {
    border: none;
    background: #f3f3f3;
  }

  textarea:focus {
    background: #f3f3f3;
  }

  .img-contact {
    height: 460px;
    width: 640px;
  }

  .btn-contact {
    background-color: #333;
    border: none;
    color: #fff;
    font-size: 12px;
    letter-spacing: 0.2em;
    width: 200px;
    height: 71px;
    border-radius: 0px;
    margin-top: 2rem;
    text-transform: uppercase;
  }
`;

export default Styles;
