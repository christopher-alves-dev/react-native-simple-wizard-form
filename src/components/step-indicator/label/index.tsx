import { normalizeFont } from "@/src/utils/normalize-font";
import React, { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  isActive?: boolean;
};

const StepIndicatorLabel = ({
  isActive = false,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Text style={[styles.label, isActive && styles.isActive]} numberOfLines={2}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: normalizeFont(12),
    color: "#e5e7eb",
    fontWeight: "bold",
  },
  isActive: {
    color: "#fff",
  },
});

export const Label = StepIndicatorLabel;
