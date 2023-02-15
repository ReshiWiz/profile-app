import React from "react";
import Navbar from "../Comps/Navbar";
import HeroIMage from "./HeroIMage";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroIMage heading={""} />
      <Footer />
    </div>
  );
};

export default Home; 
