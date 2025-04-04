import React, { createContext, useState, useContext } from "react";
import { data, Outlet } from "react-router-dom";
import { LoginAndRegisterUtil } from "../components";
import { preFetch } from "../utils/loaderRequest";
const HomeLayoutContext = createContext();

// Load current user, not finished yet

export const loader = async () => {
  const user = await preFetch("get", "/user");
}

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
