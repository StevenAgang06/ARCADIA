import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1rem;
  margin-block: 3rem;
  .slides {
    max-width: 90vh;
    margin: 0 auto;
  }
  .slides img {
    max-width: 100%;
    height: 68vh;
    object-fit: cover;
    border-radius: var(--border-radius);
    margin: 0 auto;
  }
  h1 {
    color: black;
  }
  .desc-container {
    border-radius: var(--border-radius);
    background-color: rgba(0, 0, 0, 0.9);
    text-align: left;
    padding: 1rem;
  }
  .desc {
    font-size: 1.3rem;
  }
  .title {
    color: var(--white);
    margin-block: 1rem;
    text-align: center;
    background-color: rgb(70, 150, 126);
    border-radius: var(--border-radius);
    padding: 1rem;
  }
  .sub {
    color: #38d9a9;
    margin-block: 1rem;
    text-align: center;
  }
  .desc {
    text-align: center;
  }
  .carousel-item {
    max-width: 90vw;
  }
  .carousel-item-container {
    margin: 0 auto;
  }
  .carousel-item-container:nth-child(2) {
  }
  button {
    padding: 1rem;
  }
  button {
    font-size: 1.3rem;
    border: none;
    padding-block: 0.5rem;
    margin-inline: 0.5rem;
    border: 1px solid #38d9a9;
    background-color: transparent;
    color: var(--white);
    border-radius: var(--border-radius);
    transition: var(--transition);
    margin-block: 0.5rem;
  }
  .btn {
    width: 100%;
  }

  button:hover {
    background-color: green;
    border: none;
    transform: scale(1.1);
  }

  @media (min-width: 400px) {
    .btnContainer {
      display: flex;
      justify-content: center;
      width: 50%;
      margin: 1.5rem auto;
    }
  }
`;

export default Wrapper;
