import React from "react";
import Wrapper from "../assets/wrappers/Featured";

const Featured = ({ data }) => {
  return (
    <Wrapper>
      <section>
        <figcaption>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>{data.highlight}</p>
        </figcaption>
        <figure>
          <img
            src={data.img}
            alt={
              data.alt ? data.alt : "This image dont have any alternative text"
            }
          />
        </figure>
      </section>
    </Wrapper>
  );
};

export default Featured;
