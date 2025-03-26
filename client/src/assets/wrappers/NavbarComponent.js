import styled from "styled-components";

const Wrapper = styled.section`
  header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    flex-wrap: wrap;
    width: 100%;
  }
  header {
    box-shadow: var(--shadow-2);
    background-color: var(--nav-Background);
  }
  nav {
    overflow: hidden;
    padding-block: 1.5rem;
    transition: var(--transition);
  }
  .navShow {
    width: 100%;
  }
  .navHide {
    width: 0%;
  }
  .navBarLogo {
    width: 5rem;
  }
  .hamburger {
    font-size: 5rem;
    cursor: pointer;
  }
  ul li {
    margin: 1.5rem;
  }
  ul li a {
    font-size: 2rem;
    color: #000000;
    font-weight: 600;
  }
  .toggle-btn {
    transition: var(--transition);
    padding: 0;
    background-color: transparent;
    border: none;
  }
`;

export default Wrapper;
