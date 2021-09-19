import React from "react";
import "./Hero2.scss";

const Hero2 = () => {
  return (
    <div className="hero2">
      <div className="hero2-column">
        <div className="hero2-card">
          <div className="hero2-card__title d-flex align-items-center">
            <h3>Seguridad y confiabilidad</h3>
            <span className="fas fa-user-lock"></span>
          </div>
          <p>
            Tenemos el aval de las entidades financieras mas fuertes del mercado y de grandes bancos
            como....
          </p>
        </div>
        <div className="hero2-card">
          <div className="hero2-card__title d-flex align-items-center">
            <h3>Compre y pague con criptomonedas</h3>
            <span className="fab fa-bitcoin"></span>
          </div>
          <p>Acceso al mercado internacional de divisas y mas de 90 criptomonedas y también cualquier tipo de moneda internacional</p>
        </div>
      </div>
      <div className="hero2-column">
        <div className="hero2-card">
          <div className="hero2-card__title d-flex align-items-center">
            <h3>Cifrado de Seguridad certificado ISO</h3>
            <span className="far fa-check-square"></span>
          </div>
          <p>Opere con confianza en una aplicación de confianza y el intercambio de cifrado más seguro</p>
        </div>
        <div className="hero2-card">
          <div className="hero2-card__title d-flex align-items-center">
            <h3>Tarjeta VISA Cryptune.com</h3>
            <span className="fab fa-cc-visa"></span>
          </div>
          <p>Gaste con la Tarjeta Visa de Cryptune.com y obtenga hasta un 8% de reembolso</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
