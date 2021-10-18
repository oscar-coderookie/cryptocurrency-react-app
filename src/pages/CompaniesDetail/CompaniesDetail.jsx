import "./CompaniesDetail.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const CompanyCardDetail = ({
  name,
  country,
  facebook,
  imgURL,
  year,
  trustScore,
  trustRank,
  webURL,
  volume24,
  redditURL,
  telegram
}) => {
  const formatterEuros = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  return (
    <div className="company-detail__card">
      <div className="company-detail__card__header">
        <img className="company-detail__card__image" src={imgURL} alt={name} />
        <h4 className="company-detail__card__title">{name}</h4>
      </div>

      <div className="company-detail__card__body">
        <div className="company-detail__card__fieldset">
          <div className="company-detail__card__field">
            <p className="company-detail__card__subtitle">Trust rank:</p>
            <p className="company-detail__card__info">{trustRank}</p>
          </div>
          <div className="company-detail__card__field">
            <p className="company-detail__card__subtitle">Trust score:</p>
            <p className="company-detail__card__info">{trustScore}</p>
          </div>
        </div>
    
        <div className="company-detail__card__fieldset">
          <div className="company-detail__card__field">
            <p className="company-detail__card__subtitle">Web URL:</p>
            <a href={webURL} target="_blank" rel="noreferrer" className="company-detail__card__link">
              {webURL}
            </a>
          </div>
          <div className="company-detail__card__field">
            <p className="company-detail__card__subtitle">Origen:</p>
            <p className="company-detail__card__info">
              {country} ({year})
            </p>
          </div>
        </div>
    
        <div className="company-detail__card__fieldset">
          <div className="company-detail__card__field">
            <p className="company-detail__card__subtitle">Trade volume 24H:</p>
            <p className="company-detail__card__info">{formatterEuros.format(volume24)}</p>
          </div>
        </div>
      </div>
      <div className="company-detail__card__footer">
        {!redditURL ? null : <a href={redditURL} target="_blank" rel="noreferrer" className="company-detail__card__link">
          <span className="company-detail__card__icon fab fa-reddit"></span>
        </a>}
        {!facebook ? null : <a href={facebook} target="_blank" rel="noreferrer" className="company-detail__card__link">
          <span className="company-detail__card__icon fab fa-facebook"></span>
        </a>}
        {!telegram ? null : <a href={telegram} target="_blank" rel="noreferrer" className="company-detail__card__link">
          <span className="company-detail__card__icon fab fa-telegram"></span>
        </a>}
      </div>
    </div>
  );
};
const CompaniesDetail = () => {
  const [detailData, setDetailData] = useState({});
  const [updates, setUpdates] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/exchanges/${id}`)
      .then((res) => {
        setDetailData(res.data);
        setUpdates(res.data.status_updates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log(detailData, updates);

  return (
    <div className="company-detail">
      <CompanyCardDetail
        name={detailData.name}
        country={detailData.country}
        facebook={detailData.facebook_url}
        imgURL={detailData.image}
        year={detailData.year_established}
        trustScore={detailData.trust_score}
        trustRank={detailData.trust_score_rank}
        webURL={detailData.url}
        volume24={detailData.trade_volume_24h_btc}
        redditURL={detailData.reddit_url}
        telegram={detailData.telegram_url}
      />
    </div>
  );
};

export default CompaniesDetail;
