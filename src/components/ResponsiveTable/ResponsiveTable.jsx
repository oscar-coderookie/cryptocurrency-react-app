import "./ResponsiveTable.scss";

const ResponsiveTable = ({
  arrayHeaders,
  marketCap,
  currentPrice,
  name,
  symbol,
  imageURL,
  totalVolume,
  priceChange24h,
}) => {
  return (
    <div className="table-responsive">
      <div className="table-name_container">
        <img className="coin-image" src={imageURL} alt={name} />
        <p>{name}</p>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <div className="table-column_left fields">
          {arrayHeaders.map((header) => (
            <p key={header}>{header}</p>
          ))}
        </div>
        <div className="table-column_right fields">
          <p>{symbol}</p>
          <p>€ {currentPrice}</p>
          <p>€ {totalVolume}</p>
          {priceChange24h < 0 ? <div className="table-price_down"><span className="fas fa-chevron-circle-down"></span><p>{priceChange24h}%</p></div> : <div className="table-price_up"><span className="fas fa-chevron-circle-up"></span><p>{priceChange24h}%</p></div>}

          <p>€{marketCap}</p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTable;
