import React from "react";
import Navbar from "../Comps/Navbar";
import Footer from "./Footer/Footer";
import HeroCont from "../Comps/HeroCont";
import Work from "../Comps/Work";
import WorkData from "../Comps/WorkData";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroCont heading="PROJECTS" text="Some of most recent works" />
      <WorkData />
      <Footer />
    </div>
  );
};

export default Projects;
