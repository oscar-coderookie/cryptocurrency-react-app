import "./MarketPage.scss";
import MarketsSection from "./MarketsSection/MarketsSection";
import SectionTrending from "./SectionTrending/SectionTrending";

const MarketPage = () => {
  return (
    <div className="market">
      <MarketsSection />
      <SectionTrending />
    </div>
  );
};

export default MarketPage;
