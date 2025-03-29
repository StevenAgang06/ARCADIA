import React from "react";
import Wrapper from "../../assets/wrappers/event/Featured";

const Featured = ({ data }) => {
  Object.entries(data).map((entry) => {
    console.log(entry[1]);
  });
  return (
    <Wrapper>
      {/* {Object.entries(data).map((entry) => (
        <section>
          <figure>
            <img
              src={entry.img}
              alt={
                entry.alt
                  ? entry.alt
                  : "This image dont have any alternative text"
              }
            />
          </figure>
          <figcaption>
            <h2>{entry.title}</h2>
            <p>{entry.description}</p>
            <p>{entry.highlight}</p>
          </figcaption>
        </section>
      ))} */}
    </Wrapper>
  );
};

export default Featured;
