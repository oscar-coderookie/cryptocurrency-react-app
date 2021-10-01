import "./CardHero4.scss";

import React from "react";

const CardHero4 = ({ urlImg, subtitle, legend }) => {
  return (
    <div className="hero4__card">
      <img className="hero4__img" src={urlImg} alt="investment-img" />
      <h4 className="hero4__subtitle">{subtitle}</h4>
      <p className="hero4__legend">{legend}</p>
    </div>
  );
};

export default CardHero4;
