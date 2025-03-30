import React from "react";
import { Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginForm";
const LoginForm = ({ type, name, labelText, defaultValue }) => {
  return (
    <Wrapper>
      <label htmlFor={name} className="label">
        {labelText || name}
        <input
          type={type}
          name={name}
          className="input"
          defaultValue={defaultValue}
          required
        />
      </label>
    </Wrapper>
  );
};

export default LoginForm;
