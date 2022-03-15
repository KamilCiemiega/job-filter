import { useContext, useEffect } from "react";
import filterElement from "../style/filterElement.css";
import ListContext from "../store/List-context";

const FilterElement = () => {
  const listCtx = useContext(ListContext);

  return (
    <div className="wrap">
      {listCtx.filtredData.map((item) => {
        return <div>{item.id}</div>;
      })}
      {/* {listCtx.listData.map((item) => (
        <div className="main flex">
          <div className="flex">
            <img src={item.logo} alt="logo"></img>
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
            {item.languages.map((language, key) => (
              <p key={key}>{language}</p>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default FilterElement;
