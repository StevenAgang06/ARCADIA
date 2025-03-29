import styled from "styled-components";

const Wrapper = styled.section`
  section {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-block: 3rem;
    width: 100%;
    flex-wrap: wrap;
    margin: 5rem auto;
    padding: 1rem;
  }
  .key-btn {
    border: none;
    padding: 1rem;
    font-size: 1.3rem;
    font-weight: var(--h2-weight);
    border-radius: var(--border-radius);
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), white);
    display: flex;
    align-items: center;
    width: 20rem;
    height: 5rem;
    justify-content: flex-start;
    text-align: left;
    transition: var(--transition);
  }
  .key-btn span {
    font-weight: 400;
    font-size: 2rem;
    text-align: left;
    padding-inline: 1rem;
  }
  .active {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgb(70, 150, 126)
    );
    box-shadow: var(--shadow-3);
  }
  .key-btn:hover {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgb(70, 150, 126)
    );
    box-shadow: var(--shadow-3);
    color: var(--white);
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  .link {
    font-size: 1.5rem;
    text-decoration: none;
    background-color: black;
    padding-block: 1rem;
    padding-inline: 1.5rem;
    width: 70%;
    border-radius: var(--border-radius);
    color: var(--white);
    font-weight: 500;
    display: inline-block;
    margin-block: 3rem;
    text-align: center;
  }
  .link:hover {
    background-color: rgb(70, 150, 126);
    box-shadow: var(--shadow-3);
    color: var(--white);
  }
`;

export default Wrapper;
