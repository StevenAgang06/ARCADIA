import React from "react";
import Wrapper from "../assets/wrappers/LoginAndRegisterForm";
import { Form, Link } from "react-router-dom";
import { FormRow } from "../components";
import { action, navigation } from "../utils/formRequest";
const Register = () => {
  const isRegister = navigation();
  return (
    <Wrapper>
      <main>
        <Form method="post" className="form">
          <h4>Register</h4>
          <FormRow type="text" name="name" defaultValue="steven" />
          <FormRow type="text" name="lastname" defaultValue="Agang" />
          <FormRow type="email" name="email" defaultValue="suagang@gmail.com" />
          <FormRow type="password" name="password" defaultValue="secret123" />
          <button type="submit" className="btn" disabled={isRegister}>
            {isRegister ? "Submitting..." : "Register"}
          </button>
          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
          <p>
            <Link to="/">Back Home</Link>
          </p>
        </Form>
      </main>
    </Wrapper>
  );
};

export const registerAction = async ({ request }) => {
  return action(
    request,
    "post",
    "/register",
    "Successfully Registered",
    "/login"
  );
};

export default Register;
