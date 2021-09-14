import axios from "axios";
import { useState, useEffect } from "react";
import CoinCard from "../components/CoinCard";
import Coin from "./Coin";
import "./CryptoCurrency.css";
const CryptoCurrency = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className="crypto-search">Search a Currency</h1>
        <form>
          <input type="text" className="crypto-input" placeholder="search" onChange={handleChange} />
        </form>
      </div>
      <div className="crypto-results">
  
        <table className="crypto-table">
          <thead className="crypto-headers">
            <tr>
              <td className="crypto-labels">
              Coin 
              <span className="icon fas fa-sort-down" onClick={()=> console.log('hello')}></span>
              </td>
              <td className="crypto-labels">Symbol:</td>
              <td className="crypto-labels">Price:</td>
              <td className="crypto-labels">Volume:</td>
              <td className="crypto-labels">Price change:</td>
              <td className="crypto-labels">Mkt Cap:</td>
            </tr>
          </thead>
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketCap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default CryptoCurrency;
