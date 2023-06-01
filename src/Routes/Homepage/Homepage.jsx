import React from "react";
import AboutUs from "./components/AboutUs";
import Contact from "../universal_components/Contact";
import Hero from "./components/Hero";
import Organisations from "./components/Organisations/Organisations";
import ProjectInfo from "./components/ProjectInfo";

function Homepage({ user, setUser }) {
  return (
    <>
      <Hero user={user} setUser={setUser} />
      <ProjectInfo />
      <AboutUs />
      <Organisations />
      <Contact />
    </>
  );
}

export default Homepage;
