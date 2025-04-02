import React from "react";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/LoginAndRegisterForm";
import { Form } from "react-router-dom";
import { navigation, action } from "../utils/formRequest";
const Login = () => {
  const isLogin = navigation();
  return (
    <Wrapper>
      <main>
        <Form method="post" className="form" action={loginAction}>
          <h4>Login</h4>
          <FormRow type="email" name="email" defaultValue="suagang@gmail.com" />
          <FormRow type="password" name="password" defaultValue="secret123" />
          <button type="submit" className="btn" disabled={isLogin}>
            {isLogin ? "Submitting..." : "Login"}
          </button>
          <p>
            Don't have an account?
            <Link to="/register">Register</Link>
          </p>
          <p>
            <Link to="/">Back Home</Link>
          </p>
        </Form>
      </main>
    </Wrapper>
  );
};

export const loginAction = async ({ request }) => {
  return action(request, "post", "/login", "Successfully Login", "/");
};

export default Login;
