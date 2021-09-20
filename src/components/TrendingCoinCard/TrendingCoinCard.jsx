import "./TrendingCoinCard.scss";

import React from "react";

const TrendingCoinCard = ({ coinName, coinImg, coinSymbol, marketCap }) => {
  return (
    <div className="trending-card">
      <div className="trending-card__header">
        <div className="trending-card__logo">
          <img src={coinImg} alt={coinImg} />
          <span>{coinSymbol}</span>
        </div>
      </div>
      <div className="trending-card__stats">
        <h3>{coinName}</h3>
        <p>Mkt Cap Rank: {marketCap}</p>
      </div>
    </div>
  );
};

export default TrendingCoinCard;
