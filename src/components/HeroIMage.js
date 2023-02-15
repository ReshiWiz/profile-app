import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import HeroBg from "../Assets/Images/hero-bg.jpg";
import project_1 from "../Assets/Images/project-1.png";
const HeroIMage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={HeroBg} alt="notFound" className="into-img" />
      </div>
      <div className="content">
        <p style={{ color: "#fff" }}>HI, I'M JEEVANANTHAM</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to={"/projects"} className="btn">
            projects
          </Link>
          <Link to={"/contact"} className="btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroIMage;
