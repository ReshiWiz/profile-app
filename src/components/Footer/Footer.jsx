import React from "react";
import "./Footer.css";
import { FaHome, FaMailBulk, FaPhone, FaFacebook ,FaLinkedin,FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="location">
            <p>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Tamil Nadu, Chennai
            </p>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 6380231214
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jeeva.nantham9733@gmail.com
            </h4>
          </div>
        </div>

        <div className="footer-right">
          <h4>About my skills</h4>
          <p>
            This is me Jeevanantham, I enjoy discussing new projects and design
            challenges.
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            ></FaFacebook>
              <FaInstagram
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            ></FaInstagram>
              <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            ></FaLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
