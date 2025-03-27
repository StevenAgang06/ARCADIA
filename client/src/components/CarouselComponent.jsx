import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Wrapper from "../assets/wrappers/Carousels";

const CarouselComponent = (
  slide = {
    image,
    interval,
    firstLabel,
    secondLabel,
    description,
  }
) => {
  const { slides } = slide;

  return (
    <Wrapper>
      <Carousel keyboard="true" pause="hover">
        {slides.map((slide, index) => (
          <Carousel.Item key={slide.key} interval={slide.interval}>
            <h1 className="title">{slide.firstLabel}</h1>
            <img src={slide.image} alt={slide.alt} />
            <Carousel.Caption className="desc-container">
              <h3 className="sub">{slide.secondLabel}</h3>
              <p className="desc">{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default CarouselComponent;
