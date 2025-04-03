import React from "react";
import { Navbar } from "../components";
import Wrapper from "../assets/wrappers/Events";
import Query from "../assets/wrappers/EventsQuery";
import landing_logo from "../assets/images/landing_logo.png";
import { Featured, Footer, CarouselComponent } from "../components";

// Notes: Need to edit carousel to display 3 to 2 item at a time when the screen get big

const Event = () => {
  const data = [
    {
      _id: 0,
      title: "DEEP DIVE DIALOGUES",
      description:
        "Our Deep Dive Dialogue sessions are structured discussions designed to encourage stakeholders to share their insights and experiences on the challenges and opportunities in sustainability. The sessions will be focus on sharing on-the-ground challenges, case studies, good and bad practices, as well as solutions, technologies, and best practices adopted by other countries.",
      img: "https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlight: "Forums, Panel Dicussions, Fireside Chats, Summits",
    },
    {
      _id: 1,
      title: "DEEP DIVE DIALOGUES",
      description:
        "Our Deep Dive Dialogue sessions are structured discussions designed to encourage stakeholders to share their insights and experiences on the challenges and opportunities in sustainability. The sessions will be focus on sharing on-the-ground challenges, case studies, good and bad practices, as well as solutions, technologies, and best practices adopted by other countries.",
      img: "https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlight: "Forums, Panel Dicussions, Fireside Chats, Summits",
    },
    {
      _id: 2,
      title: "DEEP DIVE DIALOGUES",
      description:
        "Our Deep Dive Dialogue sessions are structured discussions designed to encourage stakeholders to share their insights and experiences on the challenges and opportunities in sustainability. The sessions will be focus on sharing on-the-ground challenges, case studies, good and bad practices, as well as solutions, technologies, and best practices adopted by other countries.",
      img: "https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlight: "Forums, Panel Dicussions, Fireside Chats, Summits",
    },
  ];
  return (
    <Wrapper>
      <Query>
        <Navbar isActive="Event" />
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
        <main>
          <section className="second">
            {data.map((value) => (
              <Featured key={value._id} data={value} />
            ))}
          </section>
          <section className="third">
            <article className="row">
              <h2>Upcoming Events</h2>
              <CarouselComponent
                slides={[
                  {
                    key: 0,
                    image:
                      "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt: "Waste Management",
                    interval: 5000,
                    firstLabel: "PLASTIC PATHWAYS",
                    secondLabel:
                      "Leading the Way in Plastic Reuse and Reduction",
                    description:
                      "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics.",
                    btn1: true,
                    btn2: true,
                    btn1Text: "Learn More",
                    btn2Text: "Register",
                  },
                  {
                    key: 1,
                    image:
                      "https://images.unsplash.com/photo-1600716051809-e997e11a5d52?q=80&w=2650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt: "Waste Management",
                    interval: 5000,
                    firstLabel: "PLASTIC PATHWAYS",
                    secondLabel:
                      "Leading the Way in Plastic Reuse and Reduction",
                    description:
                      "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics.",
                    btn1: true,
                    btn2: true,
                    btn1Text: "Learn More",
                    btn2Text: "Register",
                  },
                  {
                    key: 2,
                    image:
                      "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt: "Waste Management",
                    interval: 5000,
                    firstLabel: "PLASTIC PATHWAYS",
                    secondLabel:
                      "Leading the Way in Plastic Reuse and Reduction",
                    description:
                      "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics.",
                    btn1: true,
                    btn2: true,
                    btn1Text: "Learn More",
                    btn2Text: "Register",
                  },
                ]}
              />
            </article>
            <article className="row">
              <h2>Previous Events</h2>
              <CarouselComponent
                slides={[
                  {
                    key: 3,
                    image:
                      "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt: "Waste Management",
                    interval: 5000,
                    firstLabel: "PLASTIC PATHWAYS",
                    secondLabel:
                      "Leading the Way in Plastic Reuse and Reduction",
                    description:
                      "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics.",
                    btn1: true,
                    btn2: false,
                    btn1Text: "Learn More",
                    btn2Text: "Register",
                  },
                  {
                    key: 4,
                    image:
                      "https://images.unsplash.com/photo-1600716051809-e997e11a5d52?q=80&w=2650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt: "Waste Management",
                    interval: 5000,
                    firstLabel: "PLASTIC PATHWAYS",
                    secondLabel:
                      "Leading the Way in Plastic Reuse and Reduction",
                    description:
                      "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics.",
                    btn1: true,
                    btn2: false,
                    btn1Text: "Learn More",
                    btn2Text: "Register",
                  },
                  {
                    key: 5,
                    image:
                      "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt: "Waste Management",
                    interval: 5000,
                    firstLabel: "PLASTIC PATHWAYS",
                    secondLabel:
                      "Leading the Way in Plastic Reuse and Reduction",
                    description:
                      "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics.",
                    btn1: true,
                    btn2: false,
                    btn1Text: "Learn More",
                    btn2Text: "Register",
                  },
                ]}
              />
            </article>
          </section>
        </main>
        <section className="six">
          <Footer />
        </section>
      </Query>
    </Wrapper>
  );
};

export default Event;
