import React from "react";
import "./workStyle.css";
import { NavLink } from "react-router-dom";

const Work = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project-1" />
      <h3 className="project-title">{props.title}</h3>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <div className="pro-btn">
        <NavLink to={props.view} className="btn" target={"_blank"}>
          View
        </NavLink>
        <NavLink to={props.source} className="btn" target={"_blank"}>
          Score
        </NavLink>
      </div>
    </div>
  );
};

export default Work;
