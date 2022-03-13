import { createContext, useState, useEffect } from "react";

const ListContext = createContext({
  listData: [],
  error: false,
  fetchData: () => {},
  inputValue: "",
  clear: "",
});

export const ListContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [inputText, setInputText] = useState("");

  const fetchDataHandler = async () => {
    setError(false);
    try {
      const response = await fetch("data.json");

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

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const clearInput = () => {
    setInputText("");
  };

  const context = {
    listData: data,
    error,
    fetchData: fetchDataHandler,
    inputValue: inputHandler,
    clear: clearInput,
  };

  return (
    <ListContext.Provider value={context}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContext;
