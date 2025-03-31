import React from "react";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/Login";
import { Form } from "react-router-dom";
import { navigation } from "../utils/formRequest";
const Login = () => {
  const isLogin = navigation();
  console.log(isLogin);
  return (
    <Wrapper>
      <main>
        <Form method="post" className="form">
          <h4>Login</h4>
          <FormRow type="email" name="email" defaultValue="suagang@gmail.com" />
          <FormRow type="password" name="password" defaultValue="secret123" />
          <button type="submit" className="btn" disabled={isLogin}>
            {isLogin ? "Submitting..." : "Login"}
          </button>
          <p>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>
        </Form>
      </main>
    </Wrapper>
  );
};

export default Login;
