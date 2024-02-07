import { useState } from "react";
import { Text, View } from "react-native";
import { Divisor } from "../components/divisor";
import * as StepIndicator from "../components/step-indicator";
import { signUpSteps } from "../utils/sign-up-steps";

export default function Home() {
  const [stepsCompleted, setStepsCompleted] = useState<string[]>([]);

  return (
    <View className="flex-1 items-center justify-center bg-white p-5">
      <View className="w-full rounded-lg bg-blue-500">
        <View className="gap-5 p-5">
          <Text className="text-xl capitalize text-white">
            Create account steps
          </Text>
          <View className="relative flex-row items-center justify-between">
            <StepIndicator.Line />

            {signUpSteps.map((step) => (
              <StepIndicator.Circle
                key={step.key}
                isComplete={stepsCompleted.includes(step.key)}
              >
                <StepIndicator.Label
                  isComplete={stepsCompleted.includes(step.key)}
                >
                  {step.label}
                </StepIndicator.Label>
              </StepIndicator.Circle>
            ))}

            <Divisor />
          </View>
        </View>
      </View>
    </View>
  );
}
