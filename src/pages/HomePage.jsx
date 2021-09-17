import React from "react";
import Hero2 from "../components/HomeComponents/Hero2";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-hero">
        <img className="home-img" src="https://images.alphacoders.com/913/913945.jpg" alt="hero" />

        <div className="home-title">
          <h1 className="home-title-text">
            "Regístrate ahora y haz parte de el gran mercado de criptomonedas, llévate los primeros Cryptunes totalmente
            gratis"
          </h1>
          <button className="home-register-btn">Registro</button>
        </div>
      </div>

      <Hero2 />
    </div>
  );
};

export default HomePage;
