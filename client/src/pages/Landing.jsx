import React, { createContext } from "react";
import { Navbar } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";
import { useState, useContext } from "react";
import { WebLogo } from "../components";
import landing_logo from "../assets/images/landing_logo.png";

const LandingContext = createContext();
const Landing = () => {
  const [showNav, setNavbar] = useState(false);
  const toggleNav = () => {
    setNavbar(!showNav);
  };
  return (
    <LandingContext.Provider
      value={{
        showNav,
        toggleNav,
      }}
    >
      <Wrapper>
        <Navbar />
        <main>
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
        </main>
      </Wrapper>
    </LandingContext.Provider>
  );
};

export const useLandingContext = () => useContext(LandingContext);
export default Landing;
