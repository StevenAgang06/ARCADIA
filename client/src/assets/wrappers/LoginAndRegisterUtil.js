import styled from "styled-components";

const Wrapper = styled.section`
  position: fixed;
  right: 2.5rem;
  bottom: 2rem;
  button {
    border: none;
    background-color: transparent;
    box-shadow: var(--shadow-3);
    border-radius: 50%;
  }
  .overlay {
    width: 4rem;
    max-width: 100%;
    padding: 0.1rem;
  }
  .overlay:hover {
    stroke: green;
  }
`;

export default Wrapper;
