import React from "react";
import Wrapper from "../assets/wrappers/Footer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <section className="footer-container">
        <section>
          <h3>Sustainability Hub</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <h3>Arcadion</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, error.
          </p>
        </section>
        <section>
          <h3>Useful Links</h3>
          <Link to="/event">Events</Link>
          <Link to="/">Knowledge Hub</Link>
          <Link to="/">Innovation</Link>
        </section>
      </section>
    </Wrapper>
  );
};

export default Footer;
