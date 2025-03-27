import React from "react";
import landing_logo from "../assets/images/landing_logo.png";
import Wrapper from "../assets/wrappers/HomePage";
import CarouselComponent from "./CarouselComponent";
import { GridPhoto, KeyPillar, About } from "./";
import Footer from "./Footer";

const HomeContainer = () => {
  return (
    <Wrapper>
      <section className="first">
        <section>
          <img
            src={landing_logo}
            alt="Landing Page Logo"
            className="landing_logo"
          />
          <h1>ARCADIA</h1>
          <h2>Sustainability Hub</h2>
          <p>Driving Progress Towards a Circular Economy</p>
        </section>
      </section>
      <section className="second">
        <h2>A Growing Network for impact</h2>
        <p>
          Arcadia brings together a diverse ecosystem of change-makers including
          the academe, local and national government agencies, NGOs,industry
          association and chambers of ecommerce. By fostering cross sector
          collaboration, we ensure that circular economy strategies are
          informed, inclusive, and built for long-term sustainability.
        </p>
        <GridPhoto />
      </section>
      <section className="third">
        <h2>Three Key Components</h2>
        <p>
          Arcadian Methodology revovles around fostering a
          <span> continuous cycle of dialogue, knowledge sharing </span> and
          <span>innovation </span>, to empower stakeholders and drive meaningful
          sustainability outcomes. Our key pillars include.
        </p>
        <KeyPillar />
      </section>
      <section className="fourth">
        <article>
          <h2>Our Focus in the Philippines Context</h2>
          <p>Local Changes Cirular Solutions</p>
        </article>
        <article>
          <p>
            In the Philippines we focus on five interconnected plans that are
            critical to advancing a circular economy and building climates
            residence
          </p>
        </article>
        <CarouselComponent
          slides={[
            {
              key: 0,
              image:
                "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Waste Management",
              interval: 5000,
              firstLabel: "PLASTIC PATHWAYS",
              secondLabel: "Leading the Way in Plastic Reuse and Reduction",
              description:
                "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics.",
            },
            {
              key: 1,
              image:
                "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Waste Management",
              interval: 5000,
              firstLabel: "PLASTIC PATHWAYS",
              secondLabel: "Leading the Way in Plastic Reuse and Reduction",
              description:
                "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics.",
            },
            {
              key: 2,
              image:
                "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Waste Management",
              interval: 5000,
              firstLabel: "PLASTIC PATHWAYS",
              secondLabel: "Leading the Way in Plastic Reuse and Reduction",
              description:
                "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics.",
            },
          ]}
        />
      </section>
      <section className="fifth">
        <About />
      </section>
      <section className="six">
        <Footer />
      </section>
    </Wrapper>
  );
};

export default HomeContainer;
