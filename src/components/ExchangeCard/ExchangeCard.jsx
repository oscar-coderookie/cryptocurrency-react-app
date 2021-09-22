import './ExchangeCard.scss';


 const ExchangeCard = ({imageURL, title, country, yearFoundation, trustRank, webURL })=> {
  return (
    <div className="exchange-card">
      <div className="exchange-card__image">
        <img src={imageURL} alt={imageURL} />
        <p>{title}</p>
        <div className="exchange-card__info">
        <p className="exchange-card__country">{country === null ? 'null' : country}</p>
        <p className="exchange-card__country">{yearFoundation === null ? 'null' : yearFoundation}</p>
        <p className="exchange-card__country">{trustRank}</p>
        <a href={webURL} className="exchange-card__country">{webURL}</a>
      </div>
      </div>
      
    </div>
  );
}

export default ExchangeCard;
