import React from "react";

import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import App from "./App";
import { name as appName } from "./app.json";

import configureStore from "./app/store/ConfigureStore";

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
