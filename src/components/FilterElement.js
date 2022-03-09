const FilterElement = (props) => {
  return (
    <div className="main">
      <div className="main-logo"> {props.logo}</div>
      <div>
        <div>
          <div className="main">{props.company}</div>
          {props.new ? <div className="main-new">NEW!</div> : null}
          {props.featured ? <div className="main-new">FEATURED</div> : null}
        </div>
        <div>{props.position}</div>
        <div>
          <div>{props.postedAt}</div>
          <div>{props.contract}</div>
          <div>{props.location}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterElement;
