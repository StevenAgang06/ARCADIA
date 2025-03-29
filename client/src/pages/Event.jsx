import React from "react";
import { Navbar } from "../components";
import Wrapper from "../assets/wrappers/event/Events";
import landing_logo from "../assets/images/landing_logo.png";
import Featured from "../components/event/Featured";

// Notes: Need to edit carousel to display 3 to 2 item at a time when the screen get big

const Event = () => {
  const data = {
    title: "DEEP DIVE DIALOGUES",
    description:
      "Our Deep Dive Dialogue sessions are structured discussions designed to encourage stakeholders to share their insights and experiences on the challenges and opportunities in sustainability. The sessions will be focus on sharing on-the-ground challenges, case studies, good and bad practices, as well as solutions, technologies, and best practices adopted by other countries.",
    img: "https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlight: "Forums, Panel Dicussions, Fireside Chats, Summits",
  };
  return (
    <Wrapper>
      <Navbar isActive="Event" />
      <main>
        <section className="first">
          <section>
            <img
              src={landing_logo}
              alt="Landing Page Logo"
              className="landing_logo"
            />
            <h1>ARCADIA</h1>
            <h2>Environmental Events</h2>
            <p>
              Foster discourse and drive actionable sustainability solutions
            </p>
          </section>
        </section>
        <section className="second">
          <Featured data={data} />
          <Featured />
        </section>
      </main>
    </Wrapper>
  );
};

export default Event;
