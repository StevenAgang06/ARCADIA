import React from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/FormModal";
import { Form } from "react-router-dom";
import { navigation, action } from "../utils/formRequest";
import customFetch from "../utils/customFetch";
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
        </Form>
      </main>
    </Wrapper>
  );
};

export const loginAction = async ({ request }) => {
  return action(request, "post", "/sample", "Successfully Login", "/");
};

export default Login;
