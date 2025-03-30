import styled from "styled-components";

const Wrapper = styled.section`
  main {
    width: 150%;
    margin: 20rem auto;
    outline: 1px solid blue;
    background-color: #087f5b;
  }
  main h4 {
    text-align: center;
    padding-block-start: 2rem;
    font-size: 2.5rem;
    color: var(--white);
  }
  .form {
    outline: 1px solid red;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    background-color: #087f5b;
  }
  .form input {
    margin-block: 1rem;
  }
  .form label {
    text-transform: capitalize;
  }
  .btn {
    border: 1px solid green;
    width: 100%;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: black;
    color: var(--white);
  }
`;

export default Wrapper;
