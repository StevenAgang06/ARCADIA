import styled from "styled-components";
import landing_background from "../images/landing_background.jpg";

// Query Value
// 600px, 924px, 1024px, 1399px

const Wrapper = styled.section`
  background: url("${landing_background}") no-repeat center;
  background-size: cover;

  main {
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
  }
  main section {
    padding-block: 10rem;
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
  }
  main section h1 {
    margin-block-start: 1.5rem;
    margin-block-end: 1rem;
    font-size: 5rem;
    font-family: serif;
    letter-spacing: 0.5px;
    border-bottom: 3px solid #087f5b;
  }
  main section h2 {
    margin-block-end: 1rem;
    font-size: 2rem;
    font-weight: 600;
  }
  main section p {
    font-size: 1.2rem;
    letter-spacing: var(--letter-spacing);
  }

  .landing_logo {
    width: 20rem;
  }
`;

export default Wrapper;
