import styled from "styled-components";
const Wrapper = styled.section`
  header {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    z-index: 999999;
  }
  header {
    box-shadow: var(--shadow-2);
    background-color: var(--nav-Background);
  }
  header figure {
    display: flex;
  }
  header figure p {
    align-self: center;
    padding-inline: 1rem;
    font-size: 2rem;
    font-family: serif;
    color: var(--white);
    padding-top: 1rem;
  }
  nav {
    overflow: auto;
    transition: var(--transition);
    width: 100%;
  }
  .navShow {
    padding-block: 1.5rem;
    height: 18rem;
  }
  .navHide {
    height: 0px;
  }
  .navBarLogo {
    width: 5rem;
    height: 5rem;
  }
  .hamburger {
    font-size: 5rem;
    cursor: pointer;
  }
  ul li {
    margin: 1.5rem;
  }
  ul li a {
    transition: var(--faster-transition);
    font-size: 2rem;
    color: #000000;
    font-weight: 600;
    text-decoration: none;
  }
  ul li a:hover {
    color: var(--white);
  }
  .active {
    color: var(--white);
  }
  .notActive {
    color: black;
  }
  .toggle-btn {
    transition: var(--transition);
    padding: 0;
    background-color: transparent;
    border: none;
  }
`;

export default Wrapper;
