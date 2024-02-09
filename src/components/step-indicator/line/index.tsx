import React from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "@/src/utils/theme";

const StepIndicatorLine = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 1,
    width: "100%",
    backgroundColor: theme.colors.offWhite,
  },
});

export const Line = StepIndicatorLine;
