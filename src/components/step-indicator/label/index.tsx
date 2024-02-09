import { normalizeFont } from "@/src/utils/normalize-font";
import { theme } from "@/src/utils/theme";
import React, { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

const StepIndicatorLabel = ({ children }: { children: ReactNode }) => {
  return (
    <Text style={styles.label} numberOfLines={2}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: normalizeFont(12),
    color: theme.colors.offWhite,
    fontWeight: "bold",
  },
});

export const Label = StepIndicatorLabel;
