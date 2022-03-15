import { useContext } from "react";

import FilterElement from "./FilterElement";
import filterList from "../style/filterList.css";
import ListContext from "../store/List-context";
import { SearchBar } from "./SearchBar";

const FilterList = () => {
  const listCtx = useContext(ListContext);

  return (
    <div>
      <div className="list-wrap">
        <SearchBar />
        <FilterElement />
      </div>
      <div>{listCtx.error && <p>Something went wrong!</p>}</div>
    </div>
  );
};

export default FilterList;
