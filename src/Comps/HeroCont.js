import "./HeroComp.css";

import React from "react";
import Projects from "../components/Projects";
const HeroCont = ({heading,text}) => {
  return (
    <div className="heroCont-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroCont;
