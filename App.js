import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splashscreen from "./src/screen/splashScreen";
import Calculator from "./src/screen/calculator";
const Stack = createNativeStackNavigator();
export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splashscreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
