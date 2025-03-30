import styled from "styled-components";

const Wrapper = styled.section`
  .footer-container {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  section {
    padding: 2rem;
  }
  section h3:nth-child(1) {
    margin-top: 1rem;
    font-size: 1.9rem;
  }
  section h3:nth-child(3) {
    margin-top: 3rem;
    font-size: 1.9rem;
  }
  section p {
    margin: 0;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
  section a {
    margin-block: 1rem;
    display: block;
    font-size: 1.4rem;
    text-decoration: none;
  }
  @media (min-width: 600px) {
    .footer-container {
      flex-direction: row;
    }
  }
`;

export default Wrapper;
