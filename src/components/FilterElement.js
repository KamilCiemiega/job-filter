import { useContext } from "react";
import filterElement from "../style/filterElement.css";
import ListContext from "../store/List-context";

const FilterElement = (props) => {
  const listCtx = useContext(ListContext);

  return (
    <div>
      {listCtx.listData.map((item) => (
        <div className="main flex">
          <div className="flex">
            <img src="../../images/faceit.svg" alt="logo"></img>
            <div className="main-wrapper">
              <div className="main-wrapper-header flex">
                <div className="main-wrapper-header-company">
                  {item.company}
                </div>
                {item.new ? (
                  <div className="main-wrapper-header-new">NEW!</div>
                ) : null}
                {item.featured ? (
                  <div className="main-wrapper-header-featured">FEATURED</div>
                ) : null}
              </div>
              <div className="main-wrapper-position">{item.position}</div>
              <div className="main-wrapper-header-information flex">
                <div className="element">{item.postedAt}</div>
                <span className="dot"></span>
                <div className="element">{item.contract}</div>
                <span className="dot"></span>
                <div className="element">{item.location}</div>
              </div>
            </div>
          </div>
          <div className="main-languages flex">
            {props.languages.map((language) => (
              <p>{language}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterElement;
