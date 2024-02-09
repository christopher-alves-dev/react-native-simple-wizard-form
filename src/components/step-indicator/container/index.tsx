import { theme } from "@/src/utils/theme";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  isActive?: boolean;
};

const StepIndicatorContainer = ({
  isActive = false,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <View style={[styles.stepIncomplete, isActive && styles.stepComplete]}>
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
    backgroundColor: theme.colors.disabled,
  },
  stepComplete: {
    backgroundColor: theme.colors.success,
  },
});

export const Container = StepIndicatorContainer;
