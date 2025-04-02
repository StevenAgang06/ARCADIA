import React from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Link } from "react-router-dom";
import FormRow from "./FormRow";
import { navigation } from "../utils/formRequest";
import Wrapper from "../assets/wrappers/FormModal";
import { Login, Register } from "../pages";

const LoginModal = ({ show, onHide, purpose }) => {
  return (
    <Wrapper>
      <main>
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {purpose === "login" ? <Login /> : null}
            {purpose === "register" ? <Register /> : null}
          </Modal.Body>
        </Modal>
      </main>
    </Wrapper>
  );
};

export default LoginModal;
