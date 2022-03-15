import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  BackHandler,
  Alert,
} from "react-native";
import { Text } from "react-native-paper";
import Button from "../../components/button";
import Row from "../../components/row";
import Header from "./header";
import { row1, row2, row3, row4 } from "../../utils";
import calculator, { initialState } from "./calculator.js";
export default function Calculator() {
  const [toggle, setToggle] = useState(false);
  const [isState, setState] = useState(initialState);

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  const handlePress = (type, value) => {
    setState(calculator(type, value, isState, toggle));
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Header
        icon={toggle ? "toggle-switch" : "toggle-switch-off-outline"}
        press={() => setToggle(!toggle)}
      />
      <View style={styles.mainContainer}>
        <SafeAreaView>
          <Text style={styles.total}>
            {toggle ? isState?.romanValue : isState?.currentValue}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => handlePress("clear")}
            />
            <Button
              text="="
              theme="accent"
              onPress={() => handlePress("equal")}
            />
          </Row>
          <Row>
            {row1.map((x, key) => {
              return (
                <Button
                  key={key}
                  text={toggle ? x.roman : x.val}
                  theme={x?.theme}
                  onPress={() => handlePress(x.type, x.val)}
                />
              );
            })}
          </Row>
          <Row>
            {row2.map((x, key) => {
              return (
                <Button
                  key={key}
                  text={toggle ? x.roman : x.val}
                  theme={x?.theme}
                  onPress={() => handlePress(x.type, x.val)}
                />
              );
            })}
          </Row>
          <Row>
            {row3.map((x, key) => {
              return (
                <Button
                  key={key}
                  text={toggle ? x.roman : x.val}
                  theme={x?.theme}
                  onPress={() => handlePress(x.type, x.val)}
                />
              );
            })}
          </Row>
          <Row>
            {row4.map((x, key) => {
              return (
                <Button
                  key={key}
                  size={x?.size}
                  text={toggle ? x.roman : x.val}
                  theme={x?.theme}
                  onPress={() => handlePress(x.type, x.val)}
                />
              );
            })}
          </Row>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  total: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
