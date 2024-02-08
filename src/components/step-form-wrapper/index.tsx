import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
};

export const StepFormWrapper = ({
  style,
  children,
}: PropsWithChildren<Props>) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    gap: 28,
    padding: 20,
  },
});
