import axios from "axios";
import { useState, useEffect } from "react";
import CoinCard from '../components/CoinCard';

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
      setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="crypto">
      <div className="crypto-search">
        <h1 className="crypto-search">Search a Currency</h1>
        <form>
          <input type="text" className="crypto-input" placeholder="search" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
          return (
              <CoinCard 
              key={coin.id} 
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketCap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}

              />
          )
      })}
    </div>
  );
};

export default CryptoCurrency;
