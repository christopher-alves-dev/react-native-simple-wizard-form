import { normalizeByPlatform } from "@/src/utils/normalize-by-platform";
import { normalizeFont } from "@/src/utils/normalize-font";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  label: string;
};

export const InputForm = ({ label }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: normalizeByPlatform(6, 6),
  },
  label: {
    fontSize: normalizeFont(16),
    color: "#fff",
    textTransform: "capitalize",
  },
  input: {
    paddingHorizontal: normalizeByPlatform(8, 8),
    paddingVertical: normalizeByPlatform(4, 10),
    backgroundColor: "#fff",
    borderRadius: normalizeByPlatform(2, 2),
  },
});
