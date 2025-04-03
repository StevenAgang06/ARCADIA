import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Wrapper from "../assets/wrappers/Carousels";
import InfoModal from "./InfoModal";
import { Button } from "react-bootstrap";

const CarouselComponent = (
  slide = {
    image,
    alt,
    interval,
    firstLabel,
    secondLabel,
    description,
    btn1,
    btn2,
    btn1Text,
    btn2Text,
  }
) => {
  const { slides } = slide;
  const [showModal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!showModal);
  };
  console.log(showModal);

  const data = {
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Upcycle WorkShop",
    sub: "CHOPCHOP! Turning Single Used Chopstick into art",
    list: {
      numberOfSpeaker: "2 Speakers",
      location: "Beijing, China",
      attendees: "35 youth enthusiast attendees",
      miniTitle: "Upcycle Workshop + Deep Dive Dialogue",
    },
    description: {
      one: "Our dedicated volunteer team collected used chopsticks from local restaurants in Beijing's Central Business District, cleaned them meticulously, and provided them to event participants. Their creative challenge was to craft a sturdy table, demonstrating the potential of waste as a valuable resource",
      two: "To wrap up our workshop on a high note, we hosted Ilanit Yoel and Maxime Klooster, industry experts in waste management. They shared insights into the realities and challenges of waste recycling in China and offered actionable ways for individuals to contribute to sustainable solutions. ",
    },
    speakers: {
      name: "Maxime Van't Klooster",
      status: "Partner at Acclime Group Illanit Yoel",
      occupation: "Co-Founder at SDeCo China (by Shibolet Dagan)",
    },
  };
  return (
    <Wrapper>
      <Carousel keyboard="true" pause="hover" className="slides">
        {slides.map((slide, index) => (
          <Carousel.Item key={index} interval={slide.interval || 3000}>
            <section className="carousel-item-container">
              <h1 className="title">{slide.firstLabel}</h1>
              <img src={slide.image} alt={slide.alt} />
              <Carousel.Caption className="desc-container">
                <h3 className="sub">{slide.secondLabel}</h3>
                <p className="desc">{slide.description}</p>
                <section className="btnContainer">
                  {slide.btn1 ? (
                    <Button type="button" onClick={toggleModal}>
                      {slide.btn1Text}
                    </Button>
                  ) : null}
                  {slide.btn2 ? <Button>{slide.btn2Text}</Button> : null}
                </section>
              </Carousel.Caption>
            </section>
          </Carousel.Item>
        ))}
      </Carousel>
      <InfoModal show={showModal} onHide={toggleModal} data={data} />
    </Wrapper>
  );
};

export default CarouselComponent;
