import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
  isComplete?: boolean;
};

const StepIndicatorCircle = ({
  isComplete = false,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <View
      className={twMerge(
        "group top-0 max-w-[100px] items-center justify-center rounded-lg border px-2 py-1",
        isComplete ? "border-white bg-green-500" : "border-black bg-gray-400",
      )}
    >
      {children}
    </View>
  );
};

export const Circle = StepIndicatorCircle;
