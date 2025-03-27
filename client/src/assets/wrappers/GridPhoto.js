import styled from "styled-components";

const Wrapper = styled.section`
  figure {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    width: 30rem;
    margin: 5rem auto;

    row-gap: 0.5rem;
  }
  figure img {
    width: 100%;
    object-fit: cover;
    height: 15rem;
    border-radius: var(--border-radius);
  }
  figure img:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export default Wrapper;
