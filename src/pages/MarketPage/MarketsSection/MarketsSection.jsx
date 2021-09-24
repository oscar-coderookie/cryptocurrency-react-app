import "./MarketsSection.scss";
import { useEffect, useState } from "react";
import { PaginationTable } from "../../../components";
import ResponsiveMarket from "./ResponsiveMarket/ResponsiveMarket";

const MarketsSection = () => {
  const [breakpoint, setBreakpoint] = useState(true);

  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth > 768) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  

  return (
    <div className="markets-section">
      <h1 className="markets__title">CryptoMarket:</h1>
      <p className="markets__legend">
        Busca entre más de 200 criptomonedas disponibles y mira su información financiera y bursátil en tiempo real:
      </p>
      {!breakpoint ? <ResponsiveMarket /> : null}
      {breakpoint ? <PaginationTable /> : null}
    </div>
  );
};

export default MarketsSection;
