import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1rem;
  margin-block: 3rem;
  .slides {
    max-width: 70rem;
    margin: 0 auto;
  }
  img {
    max-width: 100%;
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
`;

export default Wrapper;
