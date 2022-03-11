import { useState } from "react";
import searchBar from "../style/searchBar.css";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const onClickHandler = () => {
    setShowSearch(!showSearch);
    console.log(showSearch);
  };

  let changeClass = showSearch ? "click" : "defoult";

  return (
    <div>
      <form onClick={onClickHandler}>
        <input type="text" placeholder="Search" className={changeClass}></input>
      </form>
    </div>
  );
};

export default SearchBar;
