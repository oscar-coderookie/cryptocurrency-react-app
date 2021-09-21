import React from "react";
import './Coin.scss'
const Coin = ({ name, image, symbol, price, volume, priceChange, marketCap }) => {
  return (
    
      <tbody className="coin-table">
        <tr className="coin-field">
          <td className="coin-name coin-field ">
            <img className="coin-icon" src={image} alt="crypto" />
            <h2 className="coin-title">{name}</h2>
          </td>
          <td className="coin-symbol coin-field">
            {symbol}
          </td>
          <td className="coin-field">
            <p>€{price}</p>
          </td>
          <td className="coin-field">
            <p >€{volume.toLocaleString()}</p>
          </td>
          <td className="coin-field">
            {priceChange < 0 ? (
              <p className=" red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className=" green">{priceChange.toFixed(2)}%</p>
            )}
          </td>
          <td className="coin-field">${marketCap.toLocaleString()}</td>
        </tr>
      </tbody>
  );
};

export default Coin;
