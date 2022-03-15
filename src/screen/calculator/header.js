import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
export default function Header(props) {
  return (
    <Appbar.Header style={{ backgroundColor: "#202020" }}>
      <Appbar.Content title="Roman numerals" />
      <Appbar.Action icon={props.icon} size={30} onPress={props.press} />
    </Appbar.Header>
  );
}
