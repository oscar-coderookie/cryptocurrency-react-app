import "./MarketPage.scss";
import SectionTrending from "./SectionTrending/SectionTrending";
import ExchangeSection from "./ExchangeSection/ExchangeSection";
import MarketsSection from "./MarketsSection/MarketsSection";


const MarketPage = () => {
  
  return (
    <div className="market">
      <MarketsSection/>
      <ExchangeSection/>
      <SectionTrending />
    </div>
  );
};

export default MarketPage;
