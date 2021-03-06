import { createContext, useState, useEffect } from "react";

const ListContext = createContext({
  error: false,
  fetchData: () => {},
  filtredData: [],
  inputValueL: "",
});

export const ListContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [filtredData, setFiltredData] = useState([]);
  const [inputText, setInputText] = useState("");

  const fetchDataHandler = async () => {
    setError(false);
    try {
      const response = await fetch("./data.json");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

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
  };

  const filtrInputData = () => {
    if (inputText === "") {
      setFiltredData(data);
    } else {
      setFiltredData(
        data.filter((el) => {
          const languagesLower = el.languages.map((el) => el.toLowerCase());
          if (languagesLower.includes(inputText.toLowerCase())) {
            return el;
          }
        })
      );
    }
  };

  const context = {
    error,
    fetchData: fetchDataHandler,
    filtredData,
    inputValue: inputHandler,
  };

  return (
    <ListContext.Provider value={context}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContext;
