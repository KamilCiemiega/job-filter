import { createContext, useState, useEffect } from "react";

const ListContext = createContext({
  listData: [],
  error: false,
  fetchData: () => {},
  filtredData: [],
  inputValue: "",
  searchValue: "",
});

export const ListContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [inputText, setInputText] = useState("");
  const [filtredData, setFiltredData] = useState([]);

  const fetchDataHandler = async () => {
    setError(false);
    try {
      const response = await fetch("./data.json");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      setData(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  const inputHandler = (event) => {
    setInputText(event.target.value);
    setFiltredData(
      data.filter((el) => {
        const languagesLower = el.languages.map((el) => el.toLowerCase());
        if (languagesLower.includes(event.target.value.toLowerCase())) {
          return el;
        }
      })
    );
  };

  const context = {
    listData: data,
    error,
    fetchData: fetchDataHandler,
    filtredData,
    inputValue: inputHandler,
    searchValue: inputText,
  };

  return (
    <ListContext.Provider value={context}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContext;
