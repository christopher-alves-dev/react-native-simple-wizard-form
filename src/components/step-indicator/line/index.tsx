import React from "react";
import { StyleSheet, View } from "react-native";

const StepIndicatorLine = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 1,
    width: "100%",
    backgroundColor: "white",
  },
});

export const Line = StepIndicatorLine;
