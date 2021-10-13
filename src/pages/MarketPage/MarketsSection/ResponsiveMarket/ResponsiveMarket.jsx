import { useEffect, useState } from "react";
import { PaginationReact, ResponsiveTable } from "../../../../components";
import axios from "axios";
import "./ResponsiveMarket.scss";
import apiMarket from "../../../../api/coins";

const ResponsiveMarket = () => {
  const [coins, setCoins] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [coinsPerPage, setCoinsPerPage] = useState(20);

  const arrayHeaders = ["Símbolo:", "Precio:", "Volumen:", "Cambio/precio:", "Mkt cap:"];

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.abort();
    axios
      .get(apiMarket, {signal: signal})
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));

    return () => {
      abortController.abort();
    };
  }, []);

  const coinsVisited = pageNumber * coinsPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  //**Functions for react paginate component */
  return (
    <div className="row mx-auto market-responsive">
      <div className="row">
        <PaginationReact
          pages={coins}
          postsPerPage={coinsPerPage}
          changePage={changePage}
          setCoinsPerPage={setCoinsPerPage}
        />
        {coins.slice(coinsVisited, coinsVisited + coinsPerPage).map((coin) => {
          return (
            <div className="col-12 col-sm-6 mx-auto my-4" key={coin.id}>
              <ResponsiveTable
                symbol={coin.symbol}
                id={coin.id}
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
