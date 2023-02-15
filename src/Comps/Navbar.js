import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to={"/"}>
        <h1>Profile Page</h1>
      </Link>
      <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
        <li>
          {" "}
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>
          {" "}
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          {" "}
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="menu-bar" onClick={() => handleClick()}>
        {isClicked ? (
          <FaTimes size={20} style={{ color: "#fff" }}></FaTimes>
        ) : (
          <FaBars size={20} style={{ color: "#fff" }}></FaBars>
        )}
      </div>
    </div>
  );
};

export default Navbar;
