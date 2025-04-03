import styled from "styled-components";

const Query = styled.section`
  @media (min-width: 600px) {
    p {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
  @media (min-width: 824px) {
  }
  @media (min-width: 1024px) {
    .second section {
      flex-direction: row;
    }
    .second section:nth-child(even) figcaption {
      order: 2;
    }
    section p {
      font-size: 2rem;
    }
    section figcaption h2 {
      font-size: 3rem;
      text-align: left;
    }
    .third {
      flex-direction: row;
      gap: 5rem;
    }
  }
  @media (min-width: 1399px) {
    main {
      max-width: 80%;
      margin: 0 auto;
    }
  }
`;

export default Query;
