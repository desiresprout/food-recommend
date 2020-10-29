import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import configureStore from "./store";
import MainPage from "@pages/main";

const store = configureStore();
const Hot = hot(MainPage);

ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.querySelector("#root")
);
