import React from "react";
import { Navbar, HomeContainer } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";

/*
    Reminder: Need to change structure, put all the main page logic in HomePageLayout
              because we only need 1 main outlet for our 3 page, also put the context in the 
              HomepageLayout too and all the logic regarding of the usestate
*/
const Landing = () => {
  return (
    <Wrapper>
      <Navbar isActive="Home" />
      <main>
        <HomeContainer />
      </main>
    </Wrapper>
  );
};

export const useLandingContext = () => useContext(LandingContext);
export default Landing;
