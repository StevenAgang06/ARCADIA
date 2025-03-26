import React, { createContext, useState, useContext } from "react";
import { Navbar } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";

/*
    Reminder: Need to change structure, put all the main page logic in HomePageLayout
              because we only need 1 main outlet for our 3 page, also put the context in the 
              HomepageLayout too and all the logic regarding of the usestate
*/

const LandingContext = createContext();
const Landing = () => {
  const [showNav, setNavbar] = useState(false);
  const [showActive, setActive] = useState(false);
  const toggleNav = () => {
    setNavbar(!showNav);
  };
  const toggleActive = () => {
    setActive(!showActive);
  };
  return (
    <LandingContext.Provider
      value={{
        showNav,
        toggleNav,
        toggleActive,
      }}
    >
      <Wrapper>
        <Navbar isActive="Home" />
        <main></main>
      </Wrapper>
    </LandingContext.Provider>
  );
};

export const useLandingContext = () => useContext(LandingContext);
export default Landing;
