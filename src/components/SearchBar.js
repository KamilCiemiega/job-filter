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

  // const filtredData = filterCtx.listData.filter((el) => {
  //   if (filterCtx.inputValue === "") {
  //     return el;
  //   } else {
  //     return el.languages.toLowerCase().includes(filterCtx.inputValue);
  //   }
  // });

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

      {/* {filtredData.map((item) => {
        <li>{item.languages}</li>;
      })} */}
    </div>
  );
};

export default SearchBar;
