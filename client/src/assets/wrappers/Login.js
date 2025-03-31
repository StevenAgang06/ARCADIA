import styled from "styled-components";

const Wrapper = styled.section`
  main {
    width: 100%;
    height: 45rem;
    margin: 20rem auto;
  }
  main h4 {
    text-align: center;
    padding-block: 4rem;
    font-size: 4rem;
    color: #087f5b;
  }
  .form {
    font-size: 2rem;
    background-color: transparent;
    box-shadow:  0 1px 3px 0 rgba(70, 150, 126, 0.5), 0 1px 2px 0 rgba(70, 150, 126,0.4);
  }
  .form input {
    margin-block: 2rem;
  }
  .form .label {
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    color: black;
  }
  .btn {
    width: 100%;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: black;
    color: var(--white);
    transition: var(--transition):
  }

  .btn:hover{
    background-color:  #087f5b;
    color: var(--white);
  }
  p{
  margin-block: 2rem;
    text-align: center;
  }
`;

export default Wrapper;
