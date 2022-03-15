import React from "react";
import { registerRootComponent } from "expo";
import App from "./App";
import "react-native-gesture-handler";
import { Provider } from "react-native-paper";

const Main = () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
