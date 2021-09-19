import "./Hero3.scss";

import React from "react";
import './Hero3.scss';

const Hero3 = () => {
  return (
    <div className="hero3">
      <img className="hero3-img" src="https://images.alphacoders.com/913/913945.jpg" alt="hero" />

      <div className="hero3-title">
        <h1 className="hero3-title-text">
          "Regístrate ahora y haz parte de el gran mercado de criptomonedas, llévate los primeros Cryptunes totalmente
          gratis"
        </h1>
        <button className="hero3-register-btn">Registro</button>
      </div>
    </div>
  );
};

export default Hero3;
