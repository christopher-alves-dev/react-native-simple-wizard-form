import { normalizeFont } from "@/src/utils/normalize-font";
import React, { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  isComplete?: boolean;
};

const StepIndicatorLabel = ({
  isComplete = false,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Text
      style={[styles.label, isComplete && styles.isComplete]}
      numberOfLines={2}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: normalizeFont(12),
    color: "#e5e7eb",
  },
  isComplete: {
    fontWeight: "bold",
    color: "#fff",
  },
});

export const Label = StepIndicatorLabel;
