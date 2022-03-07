import "./Hero1.scss";
import React from "react";
import Logo2 from "../../../img/logo.png";

const Hero1 = ({ user }) => {
  return (
    <div className="hero1">
      <div className="hero1__container">
        <img className="hero1__logo" src={Logo2} alt="logo2" />
        <h4 className="hero1__subtitle">La criptorevolución musical</h4>
        {user ? <p className="hero1__legend">Hola: {user.email}</p> : null}
      </div>
    </div>
  );
};

export default Hero1;
