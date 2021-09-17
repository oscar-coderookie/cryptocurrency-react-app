import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <img className="home-img shadow" src="https://images.alphacoders.com/913/913945.jpg" alt="hero" />
      <figure className="home-hover"></figure>
      <div className="home-title">
        <h1 className="home-title-text">
          "Regístrate ahora y haz parte de el gran mercado de criptomonedas, llévate los primeros Cryptunes totalmente
          gratis"
        </h1>
        <button className="home-register-btn">Registro</button>
      </div>
    </div>
  );
};

export default HomePage;
