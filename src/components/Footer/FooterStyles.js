import styled from "styled-components";

const Styles = styled.div`
  #footer {
    background-color: #2c2c2c;
    padding: 3rem 0px 1rem 0px;
  }

  .title {
    font-weight: bold;
    line-height: 1.1rem;
    color: #fff;
  }

  .top {
    margin-top: 2rem;
  }

  // information
  ul {
    margin-top: 1.5rem;
  }

  li {
    margin-bottom: 1rem;
  }

  li a {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.03em;
    color: white;
  }

  // contacts
  .icons {
    height: auto;
  }

  .list-contacts {
    margin-bottom: 3rem;
  }

  .contacts-label {
    color: white;
    font-weight: 500;
    font-size: 14px;
    width: 50%;
    margin: 0 1rem;
  }

  // sosmed
  .sosmed-icon {
    margin-right: 2.5rem;
  }

  // copyright
  hr {
    background-color: #d8d8d8;
  }

  .copyright {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 12px;
    color: #c8c8c8;
    opacity: 50%;
    text-align: center;
  }
`;

export default Styles;
