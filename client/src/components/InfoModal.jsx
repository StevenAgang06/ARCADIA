import React from "react";
import { Modal } from "react-bootstrap";

const InfoModal = ({ show, onHide, data }) => {
  console.log(data);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <section className="modalBodyContainer">
          <figure>
            <img
              src={data.image}
              alt={
                data.alt ? data.alt : "Sorry this image has no alternative text"
              }
            />
          </figure>
          <figcaption>
            <h1>{data.title}</h1>
            <h3>{data.sub}</h3>
            <ul>
              {Object.values(data.list).map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
          </figcaption>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default InfoModal;
