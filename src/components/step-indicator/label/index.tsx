import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
  isComplete?: boolean;
};

const StepIndicatorLabel = ({
  isComplete = false,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Text
      className={twMerge(
        "text-xs",
        isComplete ? "text-white" : "text-gray-100",
      )}
      numberOfLines={2}
    >
      {children}
    </Text>
  );
};

export const Label = StepIndicatorLabel;
