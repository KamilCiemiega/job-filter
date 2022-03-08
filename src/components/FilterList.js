import React, { useState, useEffect } from "react";
import FilterElement from "./FilterElement";

const FilterList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchDataHandler = async () => {
    setError(null);
    try {
      const response = await fetch("data.json");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      setData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <div>
      <div>
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <FilterElement
              key={item.id}
              id={item.id}
              company={item.company}
              contract={item.contract}
              featured={item.featured}
              languages={item.languages}
              level={item.level}
              location={item.location}
              logo={item.logo}
              new={item.new}
              position={item.position}
              postedAt={item.postedAt}
              role={item.role}
              tools={item.tools}
            />
          ))}
      </div>
      <div>{error && error}</div>
    </div>
  );
};

export default FilterList;
