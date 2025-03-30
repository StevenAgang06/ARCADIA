import React from "react";
import LoginForm from "../components/LoginForm";
import Wrapper from "../assets/wrappers/Login";
import { Form } from "react-router-dom";
import { navigation } from "../utils/formRequest";
const Login = () => {
  const isLogin = navigation();
  return (
    <Wrapper>
      <main>
        <h4>Login</h4>
        <Form method="post" className="form">
          <LoginForm
            type="email"
            name="email"
            defaultValue="suagang@gmail.com"
          />
          <LoginForm type="password" name="password" defaultValue="secret123" />
          <button type="button" className="btn" disabled={isLogin}>
            {isLogin ? "Please wait..." : "Login"}
          </button>
        </Form>
      </main>
    </Wrapper>
  );
};

export default Login;
