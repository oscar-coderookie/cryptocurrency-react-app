import "./GlobalPage.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const GlobalPage = () => {
  const [data, setData] = useState({});
  //eslint-disable-next-line
  const [marketCap, setMarketCap] = useState({});

  useEffect(() => {
     axios
        .get("https://api.coingecko.com/api/v3/global")
        .then((res) => {
          setData(res.data.data);
          setMarketCap(res.data.data.market_cap_percentage);
        })
        .catch((err) => {
          console.log(err);
        });
    
  }, []);

  console.log(data, data);

  return (
    <div className="global-page">
      <div className="global-page-stats container-xl">
        <div className="global-page-actives">
          <p>Criptodivisas activas:</p>
          <p>{data.active_cryptocurrencies}</p>
        </div>
        <div className="global-page-actives">
          <p>Mercados:</p>
          <p>{data.markets}</p>
        </div>
        <div className="global-page-actives">
          <p>ICOS finalizados:</p>
          <p>{data.ended_icos}</p>
        </div>
        <div className="global-page-actives">
          <p>ICOS en curso:</p>
          <p>{data.ongoing_icos}</p>
        </div>
      </div>

      <ul className="global-page-list container-xl mx-auto">
  
      </ul>
    </div>
  );
};

export default GlobalPage;
