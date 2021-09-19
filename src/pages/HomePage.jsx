import React from "react";
import { Hero1, Hero2, Hero3 } from "../components";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero1 />
      <Hero2 />
      <Hero3/>
    </div>
  );
};

export default HomePage;
