import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  isComplete?: boolean;
};

const StepIndicatorContainer = ({
  isComplete = false,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <View style={[styles.stepIncomplete, isComplete && styles.stepComplete]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  stepIncomplete: {
    maxWidth: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#9ca3af",
  },
  stepComplete: {
    backgroundColor: "#22c55e",
  },
});

export const Container = StepIndicatorContainer;
