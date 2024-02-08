import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divisor } from "../components/divisor";
import * as StepIndicator from "../components/step-indicator";
import { signUpSteps } from "../utils/sign-up-steps";

export default function Home() {
  const [stepsCompleted, setStepsCompleted] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.signUpContainer}>
        <View style={styles.signUpHeader}>
          <Text style={styles.signUpHeading}>Create account steps</Text>
          <View style={styles.stepsIndicatorContainer}>
            <StepIndicator.Line />

            {signUpSteps.map((step) => {
              const isComplete = stepsCompleted.includes(step.key);
              return (
                <StepIndicator.Container key={step.key} isComplete={isComplete}>
                  <StepIndicator.Label isComplete={isComplete}>
                    {step.label}
                  </StepIndicator.Label>
                </StepIndicator.Container>
              );
            })}

            <Divisor />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  signUpContainer: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#6291F7",
  },
  signUpHeader: {
    gap: 20,
    padding: 20,
  },
  signUpHeading: {
    fontSize: 20,
    color: "#fff",
    textTransform: "capitalize",
  },
  stepsIndicatorContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
