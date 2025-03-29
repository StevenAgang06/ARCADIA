import styled from "styled-components";

const Query = styled.section`
  @media (min-width: 400px) {
    header figure p {
      display: block;
    }
  }
  @media (min-width: 924px) {
    .toggle-btn {
      display: none;
    }
    .hamburger {
      display: none;
    }
    .nav ul li {
      width: 100%;
      display: flex;
    }
    .navHide {
      height: 100%;
    }
    header {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
    nav ul {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export default Query;
