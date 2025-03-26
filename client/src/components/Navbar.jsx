import React from "react";
import Wrapper from "../assets/wrappers/NavbarComponent";
import { WebLogo } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useLandingContext } from "../pages/Landing";

const Navbar = () => {
  const { toggleNav, showNav } = useLandingContext();
  return (
    <Wrapper>
      <header>
        <WebLogo />
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
              <a href="#Home">Home</a>
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
