import { useState, useEffect } from "react";
import axios from "axios";
import './Coin.css'

const Table = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="table-block">
      <div className="crypto-search">
        <form>
          <input type="text" className="crypto-input" placeholder="Búsqueda" onChange={handleChange} />
        </form>
      </div>
      <table className="coin-table">
        <thead>
          <tr className="coin-field">
            <th>Moneda:</th>
            <th>Símbolo:</th>
            <th>Precio:</th>
            <th>Volumen:</th>
            <th>Cambio precio:</th>
            <th>Mkt Cap:</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => {
            return (
              <tr className="coin-field" key={coin.name}>
                <td className="coin-name">
                  <img className="coin-icon" src={coin.image} alt="crypto" />
                  <h2 className="coin-title">{coin.name}</h2>
                </td>
                <td className="coin-symbol ">{coin.symbol}</td>
                <td className="">
                  <p>€{coin.current_price}</p>
                </td>
                <td className="">
                  <p>€{coin.total_volume.toLocaleString()}</p>
                </td>
                <td className="">
                  {coin.price_change_percentage_24h < 0 ? (
                    <p className=" red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                  ) : (
                    <p className=" green">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                  )}
                </td>
                <td className="coin-">€{coin.market_cap.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
