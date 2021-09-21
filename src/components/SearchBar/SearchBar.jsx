import "./SearchBar.scss";

import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <input className="search-bar__input" type="text" onChange={handleSearch} />
      <span className="search-bar__icon fas fa-search"></span>
    </div>
  );
};

export default SearchBar;
