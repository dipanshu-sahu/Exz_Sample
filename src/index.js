import React from "react";
import {} from "react-native";
import { Provider } from "react-redux";

import { configureStore } from "./config";
import Navigation from "./config/navigation";

const store = configureStore();

const Src = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};

export default Src;
