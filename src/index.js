import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import index from "./style/index.css";
import { ListContextProvider } from "./store/List-context";

ReactDOM.render(
  <ListContextProvider>
    <App />
  </ListContextProvider>,
  document.getElementById("root")
);
