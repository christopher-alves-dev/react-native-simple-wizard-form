import { normalizeFont } from "@/src/utils/normalize-font";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { theme } from "@/src/utils/theme";

type Props = {
  onPress: () => void;
  title: string;
};

export const Button = ({ onPress, title }: Props) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.primary,
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: normalizeFont(16),
    textTransform: "uppercase",
    fontWeight: "bold",
    color: theme.colors.offWhite,
  },
});
