import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

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
`;

export default Wrapper;
