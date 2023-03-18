import React from "react";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <input type="text" placeholder="search"/>

      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
