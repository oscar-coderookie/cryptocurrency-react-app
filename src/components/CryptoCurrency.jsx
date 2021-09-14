import axios from "axios";
import { useState, useEffect } from "react";

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

  return (
    <div className="crypto">
      <div className="crypto-search">
        <h1 className="crypto-search">Search a Currency</h1>
        <form>
          <input type="text" className="crypto-input" placeholder="search" onChange={handleChange}/>
        </form>
      </div>
      .crypto-reu
    </div>
  );
};

export default CryptoCurrency;
