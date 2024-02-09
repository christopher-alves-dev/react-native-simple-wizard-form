import { normalizeFont } from "@/src/utils/normalize-font";
import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type Props = {
  title: string;
  style?: StyleProp<TextStyle>;
};

export const StepFormHeading = ({ title, style }: Props) => {
  return <Text style={[styles.heading, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    flexGrow: 0,
    fontSize: normalizeFont(20),
    color: "#fff",
    textTransform: "capitalize",
  },
});
