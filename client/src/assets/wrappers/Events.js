import styled from "styled-components";

const Wrapper = styled.section`
  .second,
  .third {
    width: 90vw;
    margin: 3rem auto;
    padding-block: 3rem;
    padding-block: 3rem;
  }
  h2 {
    font-weight: var(--h2-weight);
    line-height: var(--h2-line);
    font-size: 2.7rem;
    color: #087f5b;
  }
  p {
    font-weight: 400;
    font-size: var(--p-size);
    letter-spacing: var(--p-spacing);
    line-height: var(--p-line);
  }
  p span {
    font-weight: 600;
    color: #087f5b;
  }
  .first section {
    padding-block: 10rem;
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);
    text-align: center;
  }
  .first section h1 {
    margin-block-start: 1.5rem;
    margin-block-end: 1rem;
    font-size: 5rem;
    font-family: serif;
    letter-spacing: 0.5px;
    border-bottom: 3px solid #087f5b;
  }
  .first section h2 {
    font-size: var(--h2-size);
    margin-block-end: 1rem;
    color: var(--white);
  }
  .landing_logo {
    width: 20rem;
  }
  .third {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .third h2 {
    text-align: center;
    margin-block: 5rem;
  }
  .six {
    padding-block: 3rem;
    text-align: center;
    padding-inline: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90vw;
    margin-block: 3rem;
  }
`;

export default Wrapper;
