import { createContext, useState, useEffect } from "react";

const ListContext = createContext({
  listData: [],
  error: false,
  fetchData: () => {},
  filtredData: [],
  clear: "",
  inputValue: [],
});

export const ListContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [inputText, setInputText] = useState("");
  const [filtredData, setFiltredData] = useState([]);

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
    const arr = [];
    data.forEach((element, index) => {
      element.languages.forEach((ele) => {
        const value = ele.toLowerCase().includes(inputText);
        if (value === true) {
          arr.push(index);
        }
      });
    });

    const filteredData = data.filter((item) => {
      for (let i = 0; i <= arr.length; i++)
        if (item.id === arr[i]) {
          setFiltredData(item);
        }
    });
  };

  const clearInput = () => {
    setInputText("");
  };

  const context = {
    listData: data,
    error,
    fetchData: fetchDataHandler,
    filtredData,
    clear: clearInput,
    inputValue: inputHandler,
  };

  return (
    <ListContext.Provider value={context}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContext;
