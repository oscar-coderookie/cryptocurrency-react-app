import "./SectionTrending.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TrendingCoinCard } from "../../../components";
import { NavLink } from "react-router-dom";

const SectionTrending = (id) => {
  const [arrayCoins, setArrayCoins] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    axios
      .get("https://api.coingecko.com/api/v3/search/trending", { signal: signal })
      .then((res) => {
        setArrayCoins(res.data.coins);
      })
      .catch((error) => console.log(error));
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <section className="trending-section">
      <div className="container-xl">
        <h1>Las 7 más buscadas</h1>
        <p className="trending-section__legend">
          Las 7 monedas más populares en el criptomercado según las búsquedas de los usuarios en las últimas 24 horas
          (ordenadas por las más populares primero)
        </p>
        <div className="trending-section__cards row">
          {arrayCoins.map((coin) => {
            return (
              <div className="col-10 col-sm-6 col-lg-4 mx-auto" key={coin.item.id}>
                <NavLink className="trending-section__links" to={`/market/coins/${coin.item.id}`}>
                  <TrendingCoinCard
                    coinName={coin.item.id}
                    coinImg={coin.item.small}
                    coinSymbol={coin.item.symbol}
                    marketCap={coin.item.market_cap_rank}
                  />
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionTrending;
