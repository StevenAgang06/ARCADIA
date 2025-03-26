import React, { createContext } from "react";
import Wrapper from "../assets/wrappers/NavbarComponent";
import { WebLogo } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useLandingContext } from "../pages/Landing";
import { useContext, useState } from "react";

const NavbarContext = createContext();

const Navbar = ({ isActive }) => {
  const [togglePage, setPage] = useState(false);
  const { toggleNav, showNav } = useLandingContext();
  return (
    <Wrapper>
      <header>
        <figure>
          <WebLogo />
          <p>ARCADIA</p>
        </figure>
        <button type="button" className="toggle-btn" onClick={toggleNav}>
          {showNav ? (
            <IoMdClose className="hamburger" />
          ) : (
            <GiHamburgerMenu className="hamburger" />
          )}
        </button>
        <nav className={showNav ? "navShow" : "navHide"}>
          <ul>
            <li>
              <a className={isActive === "Home" ? "active" : null} href="#Home">
                Home
              </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Bruhh</a>
            </li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  );
};

export default Navbar;
