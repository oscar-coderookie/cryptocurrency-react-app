import "./ExchangeSection.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { ExchangeCard } from "../../../components";
import { Pagination } from "@mui/material";

const ExchangeSection = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchanges")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
  };


  return (
  
  <div className="exchange-section container-xl">
    {data.map((coin)=> {
        return ( 
          <ExchangeCard 
          key={coin.id} 
          title={coin.name} 
          imageURL={coin.image}
          country={coin.country}
          yearFoundation={coin.year_established}
          trustRank={coin.trust_score_rank}
          webURL={coin.url}
          />
          ) 
    })}
    <Pagination 
    count={data.length}
    color="primary"
    onChange={handleChangePage}
    page={page}
    />
  </div>
  )
};

export default ExchangeSection;
