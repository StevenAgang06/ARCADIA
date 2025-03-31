import React from "react";
import Wrapper from "../assets/wrappers/FormRow";
const FormRow = ({ type, name, labelText, defaultValue }) => {
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

export default FormRow;
