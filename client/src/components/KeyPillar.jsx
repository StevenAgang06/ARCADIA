import React, { useState } from "react";
import Wrapper from "../assets/wrappers/KeyPillar";
import { Link } from "react-router-dom";
const KeyPillar = () => {
  const [isActive, setActive] = useState("01");
  return (
    <Wrapper>
      <section>
        <button
          type="button"
          className={isActive === "01" ? "key-btn active" : "key-btn"}
          onClick={() => setActive("01")}
        >
          <span>01</span> EVENTS & COLLABORATION
        </button>
        <button
          type="button"
          className={isActive === "02" ? "key-btn active" : "key-btn"}
          onClick={() => setActive("02")}
        >
          <span>02</span> KNOWLEDGE HUB
        </button>
        <button
          type="button"
          className={isActive === "03" ? "key-btn active" : "key-btn"}
          onClick={() => setActive("03")}
        >
          <span>03</span> INNOVATION & SOLUTION EXCHANGE
        </button>
      </section>
      <article className={isActive === "01" ? "show" : "hide"}>
        <p>
          <span>
            Arcadia serves as a platform that brings together youth, businesses,
            researchers, governments, and industry experts through forums,
            summits, workshops, and hackathons.
          </span>{" "}
          These events are designed to foster meaningful dialogue on
          sustainability challenges, share best practices, explore emerging
          policies, and discuss innovative solutions. By connecting diverse
          stakeholders, we facilitate knowledge exchange and the exploration of
          new topics critical to driving the sustainability agenda forward.{" "}
        </p>
        <p>
          <span>
            {" "}
            Additionally, our hackathons and campaign-driven projects enable
            companies to engage with young innovators to solve pressing
            challenges, support advocacy efforts, and amplify information and
            education campaigns.{" "}
          </span>{" "}
          Through these collaborative initiatives, Arcadia empowers stakeholders
          to co-create actionable solutions that address real-world
          sustainability issues, ensuring progress toward a more sustainable
          future.
        </p>
        <Link to="/event" className="link">
          Learn More
        </Link>
      </article>
      <article className={isActive === "02" ? "show" : "hide"}>
        <p>
          <span>
            Arcadia serves as a centralized resource for cutting-edge research,
            actionable insights, and real-world case studies that drive the
            transition to a circular economy
          </span>
        </p>
        <p>
          <span>
            Our hub offers a wealth of knowledge, including detailed reports,
            expert recommendations, and impactful manifestos,
          </span>{" "}
          providing businesses, policymakers, and innovators with the tools they
          need to implement sustainable practices. By synthesizing global best
          practices and emerging trends, we empower stakeholders to make
          informed decisions and foster sustainable solutions that address
          pressing environmental challenges
        </p>
        <Link to="/event" className="link">
          Learn More
        </Link>
      </article>
      <article className={isActive === "03" ? "show" : "hide"}>
        <p>
          <span>
            Arcadia collaborates with forward-thinking companies to showcase
            cutting-edge solutions and technologies that accelerate the
            transition to a circular economy.
          </span>{" "}
          Through our platform, we connect innovators, businesses, and industry
          leaders to exchange ideas and showcase scalable, impactful solutions
          that address sustainability challenges. We actively support
          initiatives that promote green growth and sustainable development,
          driving the adoption of advanced technologies and best practices
          across sectors. By fostering collaboration, we enable stakeholders to
          implement transformative strategies that reduce environmental impact
          and contribute to a sustainable, circular future.
        </p>
        <Link to="/event" className="link">
          Learn More
        </Link>
      </article>
    </Wrapper>
  );
};

export default KeyPillar;
