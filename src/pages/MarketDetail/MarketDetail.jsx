import { useState, useEffect } from "react";
import "./MarketDetail.scss";
import { useParams } from "react-router";
import axios from "axios";

const MarketDetail = () => {
  const [data, setData] = useState({});
  const [photo, setPhoto] = useState({});
  const [price, setPrice] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}?market_data=true&developer_data=false`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setPhoto(res.data.image);
          setPrice(res.data.market_data.current_price);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, [id]);

  return (
    <div className="market-detail">
      <div className="container-xl mx-auto">
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
              <p className="market-detail__card-subtitle">Precio</p>
              <p className="market-detail__card-info">€ {price.eur}</p>
            </div>
            
            <div className="market-detail__card-text">
              <p className="market-detail__card-subtitle">Ranking Coingecko</p>
              <p className="market-detail__card-info">{data.coingecko_rank}</p>
            </div>
            <div className="market-detail__card-text">
              <p className="market-detail__card-subtitle">Puntuación Coingecko</p>
              <p className="market-detail__card-info">{data.coingecko_score}</p>
            </div>
          </div>
          <div className="market-detail__block">
            <div className="market-detail__card-text">
              <p className="market-detail__card-subtitle">Ranking marketCap</p>
              <p className="market-detail__card-info">{data.market_cap_rank}</p>
            </div>
            <div className="market-detail__card-text">
              <p className="market-detail__card-subtitle">Fecha</p>
              <p className="market-detail__card-info">{data.genesis_date == null ? "null" : data.genesis_date}</p>
            </div>
            <div className="market-detail__card-text">
              <p className="market-detail__card-subtitle">Puntaje Liquidez</p>
              <p className="market-detail__card-info">{data.liquidity_score}</p>
            </div>
          </div>
          <div className="market-detail__block">
            <div className="market-detail__card-text">
              <p className="market-detail__card-subtitle">Puntaje comunidad:</p>
              <p className="market-detail__card-info">{data.community_score}</p>
            </div>
            <div className="market-detail__card-text">
              <p className="market-detail__card-subtitle">País de origen</p>
              <p className="market-detail__card-info">{data.country_origin === "" ? "null" : data.country_origin}</p>
            </div>
            
          </div>
          <div className="market-detail__block">
            <div className="market-detail__card-text">
              <p className="market-detail__card-subtitle">Última Actualización:</p>
              <p className="market-detail__card-info">{Date(data.last_updated)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetail;
