import React, { createContext, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { LoginAndRegisterUtil } from "../components";
const HomeLayoutContext = createContext();

const HomeLayout = () => {
  const [showNav, setNavbar] = useState(false);
  const toggleNav = () => {
    setNavbar(!showNav);
  };
  return (
    <HomeLayoutContext.Provider
      value={{
        showNav,
        toggleNav,
      }}
    >
      <section>
        <Outlet />
      </section>
      <LoginAndRegisterUtil />
    </HomeLayoutContext.Provider>
  );
};

export const useHomeLayoutContext = () => useContext(HomeLayoutContext);
export default HomeLayout;
