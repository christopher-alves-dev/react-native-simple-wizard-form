import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

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
    fontSize: 20,
    color: "white",
    textTransform: "capitalize",
  },
});
