import { useEffect, useState } from "react";
import { PaginationReact, ResponsiveTable } from "../../../../components";
import axios from "axios";
import "./ResponsiveMarket.scss";

const ResponsiveMarket = () => {
  const [coins, setCoins] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [coinsPerPage, setCoinsPerPage] = useState(20)

  const arrayHeaders = ["Símbolo", "Precio", "Volumen", "Cambio/precio", "Mkt cap"];

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

 
  const coinsVisited = pageNumber * coinsPerPage;

  const changePage = ({selected}) => {
    setPageNumber(selected);
}
  //**Functions for react paginate component */
  return (
    <div className="container-xl market-responsive">
      <div className="row">
        <PaginationReact pages={coins} postsPerPage={coinsPerPage} changePage={changePage} setCoinsPerPage={setCoinsPerPage}/>
        {coins
        .slice(coinsVisited, coinsVisited + coinsPerPage)
        .map((coin) => {
          return (
            <div className="col-11 col-sm-6 mx-auto p-0">
              <ResponsiveTable
                key={coin.id}
                symbol={coin.symbol}
                priceChange24h={coin.price_change_percentage_24h.toFixed(2)}
                name={coin.name}
                currentPrice={coin.current_price}
                imageURL={coin.image}
                totalVolume={coin.total_volume.toLocaleString()}
                marketCap={coin.market_cap.toLocaleString()}
                arrayHeaders={arrayHeaders}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResponsiveMarket;
