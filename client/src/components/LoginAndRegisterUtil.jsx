import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginAndRegisterUtil";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState } from "react";
const LoginAndRegisterUtil = () => {
  const [showOverlay, setOverlay] = useState(false);
  const toggleOverlay = () => {
    setOverlay(!showOverlay);
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Link to="/login">Login</Link>
        <Link to="register">Register</Link>
      </Popover.Body>
    </Popover>
  );
  return (
    <Wrapper>
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <button onClick={toggleOverlay}>
          {showOverlay ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="overlay"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="overlay"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          )}
        </button>
      </OverlayTrigger>
    </Wrapper>
  );
};

export default LoginAndRegisterUtil;
