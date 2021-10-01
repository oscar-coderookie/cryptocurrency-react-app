import "./Hero4.scss";
import investmentImg from "../../../img/investment.svg";
import graphics from "../../../img/graphics.svg";
import allData from "../../../img/allData.svg";
import React from "react";
import CardHero4 from './CardHero4/CardHero4';

const Hero4 = () => {
  return (
    <div className="hero4">
      <div className="hero4__section-container">
        <CardHero4
        urlImg={graphics}
        subtitle="Sigue el mercado"
        legend="Sigue las estadísticas del criptomercado en tiempo real, comprueba tu criptomoneda favorita y consulta su evolución."
        />
        <CardHero4
        urlImg={investmentImg}
        subtitle="Compra y vende divisas"
        legend="Accede a un mercado de mas de 200 criptomonedas, y ten la posibilidad de comprar con tu tarjeta de crédito o cuenta bancaria."
        />
        <CardHero4
        urlImg={allData}
        subtitle="Sigue el mercado"
        legend="Sigue las estadísticas del criptomercado en tiempo real, comprueba tu criptomoneda favorita y consulta su evolución."
        />

      </div>
    </div>
  );
};

export default Hero4;
