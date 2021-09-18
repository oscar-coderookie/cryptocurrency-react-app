import React from "react";
import PaginationTable from "../components/PaginationTable/PaginationTable";
import "./TablePage.css";
const TablePage = () => {

  return (
    <div className="table">
      <h1>CryptoMarket:</h1>
      <PaginationTable/>
    </div>
  );
};

export default TablePage;
