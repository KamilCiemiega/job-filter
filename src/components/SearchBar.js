import { useState, useContext } from "react";
import searchBar from "../style/searchBar.css";
import ListContext from "../store/List-context";

export const SearchBar = () => {
  const filterCtx = useContext(ListContext);

  return (
    <div className="form">
      <input
        type="search"
        placeholder="Search"
        className="defoult"
        onChange={filterCtx.inputValue}
      />
    </div>
  );
};
