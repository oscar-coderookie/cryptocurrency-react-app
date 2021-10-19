import * as React from "react";
import "./ResponsiveExchangeCard.scss";
import { NavLink } from "react-router-dom";

const ResponsiveExchangeCard = ({ imageURL, title, country, yearFoundation, trustRank, webURL, id }) => {
  return (
    <NavLink className="table-link" to={`/market/companies/${id}`}>
      <div className={trustRank <= 10 ? "skeleton skeleton-rank-green" : "skeleton"}>
        <div className="skeleton-header">
          <div className="skeleton-header__logo">
            <img className="skeleton-header__image" alt={imageURL} src={imageURL} />
            <h4 className="skeleton-header__title">{title}</h4>
          </div>
          {!country ? null : <div className="skeleton-header__info">
            <div className="skeleton-header__city">
              <p className="skeleton-header__subtitle">País:</p>
              <p className="skeleton-header__text">{country}</p>
            </div>
          </div>}
        </div>

        <div className="skeleton-bottom">
          <div className="skeleton-bottom__trustrank">
            <p className="skeleton-bottom__subtitle">Trust-Rank:</p>
            <p className="skeleton-bottom__info">{trustRank}</p>
          </div>

          <div className="skeleton-bottom__year">
            <p className="skeleton-bottom__subtitle">Año:</p>
            <p className="skeleton-bottom__text">{yearFoundation}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ResponsiveExchangeCard;
