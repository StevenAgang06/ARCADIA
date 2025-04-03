import styled from "styled-components";
const Wrapper = styled.section`
  header {
    padding: 1.5rem;
    position: fixed;
    width: 100%;
    z-index: 10;
  }
  header section {
    display: flex;
    max-width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  header {
    box-shadow: var(--shadow-2);
    background-color: var(--nav-Background);
  }
  header section figure {
    display: flex;
  }
  header section figure p {
    align-self: center;
    padding-inline: 1rem;
    font-size: 2rem;
    font-family: serif;
    color: var(--white);
    padding-top: 1rem;
  }
  header section nav {
    overflow: auto;
    transition: 200ms ease-in-out;
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
    margin-inline: 1.5rem;
    margin-block: 1rem;
  }
  ul li a {
    transition: var(--faster-transition);
    font-size: 2rem;
    color: #000000;
    font-weight: 600;
    text-decoration: none;
  }
  ul li a:hover,
  .btn:hover {
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
  .btn {
    padding: 0;
    align-self: center;
    font-size: 2rem;
    border: none;
    font-weight: 600;
    background-color: transparent;
    box-shadow: 0px 0px 0px transparent;
  }
`;

export default Wrapper;
