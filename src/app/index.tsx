import { useState } from "react";
import { Text, View } from "react-native";
import { Divisor } from "../components/divisor";
import * as StepIndicator from "../components/step-indicator";

export default function Home() {
  const [stepsCompleted, setStepsCompleted] = useState<string[]>(["first"]);

  return (
    <View className="flex-1 items-center justify-center bg-white p-5">
      <View className="w-full rounded-lg bg-blue-500">
        <View className="gap-5 p-5">
          <Text className="text-xl capitalize text-white">
            Create account steps
          </Text>
          <View className="relative flex-row items-center justify-between">
            <StepIndicator.Line />

            <StepIndicator.Circle isComplete={stepsCompleted.includes("first")}>
              <StepIndicator.Label
                isComplete={stepsCompleted.includes("first")}
              >
                Account Information
              </StepIndicator.Label>
            </StepIndicator.Circle>

            <StepIndicator.Circle
              isComplete={stepsCompleted.includes("second")}
            >
              <StepIndicator.Label
                isComplete={stepsCompleted.includes("second")}
              >
                Personal Information
              </StepIndicator.Label>
            </StepIndicator.Circle>

            <StepIndicator.Circle isComplete={stepsCompleted.includes("last")}>
              <StepIndicator.Label isComplete={stepsCompleted.includes("last")}>
                Success!
              </StepIndicator.Label>
            </StepIndicator.Circle>

            <Divisor />
          </View>
        </View>
      </View>
    </View>
  );
}
