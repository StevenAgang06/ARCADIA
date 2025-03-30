import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/404.svg";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status) {
    return (
      <Wrapper>
        <section>
          <img src={img} alt="not found" />
          <h3>Ohh! This is what happens when a page decides to ghost you.</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/">Back Home</Link>
        </section>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <section>
        <h1>Error Page</h1>
        <Link to="/">Back Home</Link>
      </section>
    </Wrapper>
  );
};

export default ErrorPage;
