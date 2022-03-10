import { useContext } from "react";

import FilterElement from "./FilterElement";
import filterList from "../style/filterList.css";
import ListContext from "../store/List-context";

const FilterList = () => {
  const listCtx = useContext(ListContext);

  return (
    <div>
      <div className="list-wrap">
        <FilterElement />
      </div>
      <div>{listCtx.error && <p>Something went wrong!</p>}</div>
    </div>
  );
};

export default FilterList;
