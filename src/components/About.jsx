import React from "react";
import Navbar from "../Comps/Navbar";
import Footer from "./Footer/Footer";
import HeroCont from "../Comps/HeroCont";
import Skills from "../Comps/Skills";
const About = ({ heading, text }) => {
  return (
    <div>
      <Navbar />
      {/* <HeroCont heading={"ABOUT"} text={"Im a Full Stack developer"} /> */}
       <Skills/>
       
      <Footer />
    </div>
  );
};

export default About;
