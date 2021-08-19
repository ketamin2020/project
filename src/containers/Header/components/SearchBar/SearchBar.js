import React, { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const inputHeandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={style.searchBarContainer}>
      <input
        type="text"
        name="searchBar"
        placeholder="Поиск по каталогу"
        className={style.searchInput}
        value={inputValue}
        onChange={inputHeandler}
      />
      <span className={style.loupeSearch}></span>
    </div>
  );
};

export default SearchBar;
