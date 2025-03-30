import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Wrapper from "../assets/wrappers/Carousels";
import { set } from "mongoose";

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
  const [showItem, setItem] = useState(false);

  const toggleCarousel = () => {
    setItem(!showItem);
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
                <section className="btn">
                  {slide.btn1 ? <button>{slide.btn1Text}</button> : null}
                  {slide.btn2 ? <button>{slide.btn2Text}</button> : null}
                </section>
              </Carousel.Caption>
            </section>
          </Carousel.Item>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default CarouselComponent;

// Grouping index;

// const groupedSlides = [];
// for (let i = 0; i < slides.length; i += 2) {
//   groupedSlides.push(slides.slice(i, i + 2));
// }

// Multiple item each slide

// {groupedSlides.map((group, index) => (
//   <Carousel.Item key={index} interval={group[index]?.interval || 3000}>
//     <section className="carousel-item-container">
//       {group.map((slide, subIndex) => (
//         <section key={subIndex}>
//           <h1 className="title">{slide.firstLabel}</h1>
//           <img src={slide.image} alt={slide.alt} />
//           <Carousel.Caption className="desc-container">
//             <h3 className="sub">{slide.secondLabel}</h3>
//             <p className="desc">{slide.description}</p>
//           </Carousel.Caption>
//         </section>
//       ))}
//     </section>
//   </Carousel.Item>
// ))}
// </Carousel>
