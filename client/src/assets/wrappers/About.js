import styled from "styled-components";

const Wrapper = styled.section`
  h2,
  p,
  p span {
    color: var(--white) !important;
  }
  p {
    font-weight: 400;
    text-align: left;
    margin-block: 3rem;
    padding-inline: 3rem;
    text-indent: 1rem;
  }
  p span {
    font-weight: 600;
  }
`;

export default Wrapper;
