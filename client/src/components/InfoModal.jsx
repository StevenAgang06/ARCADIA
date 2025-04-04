import React from "react";
import { Modal } from "react-bootstrap";

// Complete Info Modal, and fix some of the design bug in mobile
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
            <article>
              <section>
              <h1>{data.title}</h1>
              <h3>{data.sub}</h3>
              </section>
              <ul>
                {Object.values(data.speakers).map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </article>
            <ul className="list">
              {Object.values(data.list).map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
            {data.description.one ? <p>{data.description.one}</p> : null}
            {data.description.two ? <p>{data.description.two}</p> : null}
          </figcaption>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default InfoModal;
