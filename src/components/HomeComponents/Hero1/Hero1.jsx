import "./Hero1.scss";
import React from "react";
import Logo2 from "../../../img/logo-coin.png";

const Hero1 = ({ user }) => {
  return (
    <div className="hero1">
      <div className="hero1__container">
        <img className="hero1__logo" src={Logo2} alt="logo2" />
        <h1 className="hero1__title">Cryptune.com</h1>
        {user ? <p className="hero1__legend">Bienvenido: {user.email}</p> : null}
      </div>
    </div>
  );
};

export default Hero1;
