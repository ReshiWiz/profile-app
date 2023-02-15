import React from "react";
import "./workStyle.css";
import Work from "./Work";

// import { projectDataCard={} } from "./WorkCartData";
// import WorkCartData from "./WorkCartData"
import projectDataCard from "./WorkCartData";
const WorkData = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {projectDataCard.map((curr, idx) => {
          return (
            <Work
              key={idx}
              imgsrc={curr.imgsrc}
              title={curr.title}
              text={curr.text}
              view={curr.view}
              source={curr.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkData;
