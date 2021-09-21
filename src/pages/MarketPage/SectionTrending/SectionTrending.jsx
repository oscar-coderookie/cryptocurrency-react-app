import "./SectionTrending.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TrendingCoinCard } from "../../../components";


const SectionTrending = () => {
  const [arrayCoins, setArrayCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setArrayCoins(res.data.coins);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(arrayCoins);

  return (
    <section className="trending-section">
      <div className="container-xl">
      <h1>Monedas más buscadas</h1>
      <p className="trending-section__legend">Las 7 monedas más populares en  el criptomercado según las búsquedas de los usuarios en las últimas 24 horas (ordenadas por las más populares primero)</p>
        <div className="trending-section__cards row">
          {arrayCoins.map((coin) => {
            return (
              <div className="col-10 col-md-4 col-lg-3 mx-auto">
                <TrendingCoinCard 
                coinName={coin.item.id} 
                coinImg={coin.item.small}
                coinSymbol={coin.item.symbol}
                marketCap={coin.item.market_cap_rank} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionTrending;
