import { useState, useContext } from "react";
import searchBar from "../style/searchBar.css";
import ListContext from "../store/List-context";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const onClickHandler = () => {
    setShowSearch(!showSearch);
  };

  const filterCtx = useContext(ListContext);

  let changeClass = showSearch ? "click" : "defoult";

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Search"
        className={changeClass}
        onClick={onClickHandler}
        onChange={filterCtx.inputValue}
      />
      {showSearch ? (
        <p className="clear" onClick={filterCtx.clear}>
          Clear
        </p>
      ) : null}

      {/* {filterCtx.filtredData.map((item) => {
        <p>{item.company}</p>;
      })} */}
      {/* {console.log(filterCtx.filtredData)} */}
    </div>
  );
};

export default SearchBar;
