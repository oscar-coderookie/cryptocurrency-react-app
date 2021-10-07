import { useState, useEffect } from "react";
import "./MarketDetail.scss";
import { useParams } from "react-router";
import axios from "axios";

const MarketDetail = () => {
  const [data, setData] = useState({});
  const [photo, setPhoto] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}?market_data=true`)
        .then((res) => {
          setData(res.data);
          setPhoto(res.data.image)
        })
        .catch((error) => console.log(error));
    };
    fetchData()
  }, [id]);
  console.log( 'data==>', data);

  return (
    <div className="market-detail">
      <h1 className="market-detail__title">Detalle: {data.id}</h1>
      <div className="market-detail__card">
        <div className="market-detail__card-title">
        <img src={photo.small} alt="dasd" />
          <p>
            {data.name} ({data.symbol})
          </p>
        </div>
        <div className="market-detail__block">
          <div className="market-detail__card-text">
            <p className="market-detail__card-subtitle">País de origen</p>
            <p>{data.country_origin === "" ? "null" : data.country_origin}</p>
          </div>
          <div className="market-detail__card-text">
            <p className="market-detail__card-subtitle">Ranking Coingecko</p>
            <p>{data.coingecko_rank}</p>
          </div>
          <div className="market-detail__card-text">
            <p className="market-detail__card-subtitle">Puntuacion Coingecko</p>
            <p>{data.coingecko_score}</p>
          </div>
        </div>
        <div className="market-detail__block">
          <div className="market-detail__card-text">
            <p className="market-detail__card-subtitle">Ranking marketCap</p>
            <p>{data.market_cap_rank}</p>
          </div>
          <div className="market-detail__card-text">
            <p className="market-detail__card-subtitle">Fecha</p>
            <p>{data.genesis_date == null ? "null" : data.genesis_date}</p>
          </div>
          <div className="market-detail__card-text">
            <p className="market-detail__card-subtitle">Puntaje Liquidez</p>
            <p>{data.liquidity_score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetail;
