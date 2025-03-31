import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-router-dom";

const FormModal = ({
  show,
  onHide,
  title,
  purpose,
  type,
  name,
  labelText,
  defaultValue,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Hi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Form>
          <FormRow
            type={type}
            name={name}
            defaultValue={defaultValue || "Your Email"}
          />
          <FormRow
            method="post"
            className="form"
            type={type}
            name={name}
            defaultValue={defaultValue || "Password"}
          />
          <button type="submit" className="btn" disabled={purpose}>
           purpose ? "Submitting..." : "Login"}
          </button>
          {purpose === "login" ? (
            <p>
              Don't have an account?
              <Link to="/register"> Register</Link>
            </p>
          ) : null}
        </Form> */}
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
