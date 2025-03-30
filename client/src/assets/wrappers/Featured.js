import styled from "styled-components";

const Wrapper = styled.section`
  section {
    margin-block: 5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  section figure img {
    max-width: 100%;
    height: auto;
    margin-block: 3rem;
    padding-inline: 3rem;
    object-fit: cover;
    align-self: center;
    border-radius: var(--border-radius);
  }
  section figcaption {
    margin-block: 3rem;
    margin-inline: 3rem;
  }
  section figcaption h2 {
    text-align: center;
    margin-block-end: 4rem;
  }
  section figcaption p {
    padding-block: 1.5rem;
  }
  section figcaption p:nth-child(3) {
    color: #087f5b;
    font-weigth: 600;
  }
`;

export default Wrapper;
