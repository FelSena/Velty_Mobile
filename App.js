import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import COLORS from "./src/styles/Colors";
import { Provider } from "react-redux";
import store from "./src/Store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.orange} barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
