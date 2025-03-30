import styled from "styled-components";

const Query = styled.section`
  @media (min-width: 400px) {
    .second figure {
      width: 80%;
    }
  }
  @media (min-width: 600px) {
    //   Global
    p {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 3rem;
    }
    //   End
    .second,
    .third,
    .fourth,
    .fifth article {
      width: 80%;
      margin-inline: auto;
    }

    .second figure {
      width: 90%;
    }

    .third section .key-btn {
      width: 30rem;
    }

    .fifth p {
      padding-inline: 5rem;
    }
  }

  @media (min-width: 824px) {
    .third section .key-btn {
      width: 30rem;
    }
    .third section .link {
      width: 50%;
    }
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 3.5rem;
    }
    p {
      font-size: 2rem;
    }
    .second,
    .third,
    fourth {
      margin-block: 10rem;
    }
    .second {
      flex-direction: row;
      column-gap: 10rem;
    }
    .second h2 {
      line-height: 3rem;
    }
    .second figure {
      width: 35rem;
      transform: scale(1.2);
    }
    .third section .link {
      width: 40%;
    }
    .third section .key-btn {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1399px) {
    .second figure {
      width: 60rem;
      transform: scale(1.2);
    }
    .third section .link {
      width: 30%;
    }
    .fourth p {
      text-align: center;
    }
  }
`;

export default Query;
