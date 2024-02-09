import { normalizeFont } from "@/src/utils/normalize-font";
import { theme } from "@/src/utils/theme";
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
    flexGrow: 1,
    fontSize: normalizeFont(20),
    color: theme.colors.offWhite,
    textTransform: "capitalize",
  },
});
