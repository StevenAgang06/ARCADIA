import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/NavbarComponent";
import Query from "../assets/wrappers/Query";
import { WebLogo } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useHomeLayoutContext } from "../pages/HomeLayout";

const Navbar = ({ isActive }) => {
  const { toggleNav, showNav } = useHomeLayoutContext();
  return (
    <Query>
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
                <Link
                  to="/"
                  className={isActive === "Home" ? "active" : "notActive"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/event"
                  className={isActive === "Event" ? "active" : "notActive"}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/knowledgehub"
                  className={
                    isActive === "KnowledgeHub" ? "active" : "notActive"
                  }
                >
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link to="/">Innovation</Link>
              </li>
            </ul>
          </nav>
        </header>
      </Wrapper>
    </Query>
  );
};

export default Navbar;
