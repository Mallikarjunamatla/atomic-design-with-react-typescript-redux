import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./index.css";

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App message={"Admin"} />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById("root")
);
