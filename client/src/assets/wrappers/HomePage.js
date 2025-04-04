import styled from "styled-components";

const Wrapper = styled.section`
  h2 {
    font-weight: var(--h2-weight);
    line-height: var(--h2-line);
    font-size: 2.7rem;
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
  }
  .landing_logo {
    width: 20rem;
  }
  .second,
  .third,
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
  .fifth {
    padding-block: 3rem;
    text-align: center;
    padding-inline: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .second h2,
  .third h2,
  .fourth h2 {
    color: #087f5b;
    padding-block: 3rem;
  }
  .second p,
  .third p {
    text-align: left;
  }
  .second p {
    margin: 1rem auto;
    text-align: left;
    width: 90%;
  }
  .third {
    padding-block: 1rem;
    padding-inline: 3rem;
  }
  .third p {
    margin-block: 3rem;
  }
  .fourth {
    width: 100%;
    margin-block: 3rem;
  }
  .fourth article:nth-child(1) {
    text-align: center;
  }
  .fourth article:nth-child(1) p {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
  .fourth article:nth-child(2) {
    padding-inline: 3rem;
  }
  .fifth {
    margin-block-start: 15rem;
    background-color: #087f5b;
  }
`;

export default Wrapper;
