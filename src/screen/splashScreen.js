import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Icon from "react-native-vector-icons/SimpleLineIcons";
export default function SplashScreen({ navigation }) {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate("Calculator");
    }, 2000);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Icon name="calculator" size={100} color="#464646" />
      <ActivityIndicator
        animating={animating}
        color="#464646"
        size="small"
        style={styles.activityIndicator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f8ff",
  },
  activityIndicator: { alignItems: "center", height: 80 },
});
