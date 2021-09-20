import "./MarketPage.scss";

import { PaginationTable } from "../../components";
import SectionTrending from "./SectionTrending/SectionTrending";

const MarketPage = () => {
  return (
    <div className="market">
      <h1>CryptoMarket:</h1>
      <p className="market__legend">Busca entre más de 100 critptomonedas disponibles y mira su información financiera y bursátil en tiempo real:</p>
      <PaginationTable />
      <SectionTrending />
    </div>
  );
};

export default MarketPage;
