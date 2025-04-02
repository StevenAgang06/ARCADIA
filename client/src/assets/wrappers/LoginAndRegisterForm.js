import styled from "styled-components";

const Wrapper = styled.section`
  main {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 20rem;
  }
  main h4 {
    text-align: center;
    padding-block: 2rem;
    font-size: 4rem;
    color: #087f5b;
  }
  .form {
  width: 100%;
    font-size: 1.5rem;
    background-color: transparent;
  }
  .form input {
    margin-block: 1.5rem;
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
  a{
    text-decoration: none;
    margin-inline: 0.2rem;
  }
  p{
  margin-block: 2rem;
    text-align: center;
  }
  .h4{
    text-align: center;
  }
`;

export default Wrapper;
