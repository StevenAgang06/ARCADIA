import React from "react";

const Home = () => {
  return (
    <div>
      <section id="Home">
        <img
          src={landing_logo}
          alt="Landing Page Logo"
          className="landing_logo"
        />
        <h1>ARCADIA</h1>
        <h2>Sustainability Hub</h2>
        <p>
          Driving Progress Towards a <span>Circular Economy</span>
        </p>
      </section>
      <section></section>
    </div>
  );
};

export default Home;
