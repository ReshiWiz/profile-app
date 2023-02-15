import React from "react";
import Navbar from "../Comps/Navbar";
import Footer from "./Footer/Footer";
import HeroCont from "../Comps/HeroCont";
import FromContact from "../Comps/FromContact";
const Contact = ({ heading, text }) => {
  return (
    <div>
      <Navbar />
      
      <HeroCont heading={"CONTACT"} text={` Let's have a chat`} />
      <FromContact />
      <Footer />
    </div>
  );
};

export default Contact;
