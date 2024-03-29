import { theme } from "@/src/utils/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Divisor = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    position: "absolute",
    bottom: -20,
    height: 1,
    width: "100%",
    backgroundColor: theme.colors.disabled,
  },
});
