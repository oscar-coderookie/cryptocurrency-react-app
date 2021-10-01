import React from "react";
import { Hero1, Hero2, Hero3, Hero4 } from "../../components";
import "./HomePage.css";

const HomePage = ({ user }) => {
  return (
    <div className="home-page">
      <Hero1 user={user} />
      <Hero2 />
      <Hero3 />
      <Hero4 />
    </div>
  );
};

export default HomePage;
