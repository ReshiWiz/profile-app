import React from "react";

import JavaScript from "../Assets/Images/javascript.png";
import ReactJS from "../Assets/Images/react.png";
import Node from "../Assets/Images/node.png";
import FireBase from "../Assets/Images/firebase.png";
import Mongo from "../Assets/Images/mongo.png";
import GitHub from "../Assets/Images/github.png";
import Css from "../Assets/Images/css.png";
import HtmlImg from "../Assets/Images/html.png";

const Skills = () => {
  return (
    <div className="bg-[#0b0b0c]  text-gray-300  w-full h-screen  ">
      <div className="max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full   ">
        <div>
          <p className="text-4xl block border-b-3  mb-12"> Skills</p>
          <p className="py-4 ">These are the technologies I've worked with</p>
          <div className="w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#000101] hover:scale-110 duration-500">
              <img className="w-10 mx-auto" src={HtmlImg} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-10 mx-auto" src={Css} alt="HTML icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-10 mx-auto" src={JavaScript} alt="HTML icon" />
              <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-10 mx-auto" src={ReactJS} alt="HTML icon" />
              <p className="my-4">Node.js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-10 mx-auto" src={Mongo} alt="HTML icon" />
              <p className="my-4">Mongoose</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-10 mx-auto" src={FireBase} alt="HTML icon" />
              <p className="my-4">Firebase</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-10 mx-auto" src={Node} alt="HTML icon" />
              <p className="my-4">Node.js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-10 mx-auto" src={GitHub} alt="HTML icon" />
              <p className="my-4">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
