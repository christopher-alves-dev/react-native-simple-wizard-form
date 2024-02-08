import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { Divisor } from "../components/divisor";
import { InputForm } from "../components/input-form";
import { ScrollableContainer } from "../components/scrollable-container";
import { StepFormHeading } from "../components/step-form-heading";
import { StepFormWrapper } from "../components/step-form-wrapper";
import * as StepIndicator from "../components/step-indicator";
import { useStepScroll } from "../hooks/use-scroll-to";
import { signUpSteps } from "../utils/sign-up-steps";
import { Button } from "../components/button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Home() {
  const [stepsCompleted, setStepsCompleted] = useState<string[]>(["account"]);
  const {
    scrollRef,
    stepFormComponentWidth,
    handleGoToNextStep,
    handleGoToPreviousStep,
  } = useStepScroll();

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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

        <ScrollableContainer ref={scrollRef}>
          <StepFormWrapper style={{ width: stepFormComponentWidth }}>
            <StepFormHeading title="Account Information" />

            <View style={styles.fieldsWrapper}>
              <InputForm label="email" />
              <InputForm label="username" />
              <InputForm label="password" />
            </View>

            <Button
              title="Next Step"
              onPress={() => handleGoToNextStep("account")}
            />
          </StepFormWrapper>

          <StepFormWrapper style={{ width: stepFormComponentWidth }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <TouchableOpacity onPress={handleGoToPreviousStep}>
                <Text>Back</Text>
              </TouchableOpacity>
              <StepFormHeading title="Personal Information" />
            </View>

            <View style={styles.fieldsWrapper}>
              <InputForm label="first name" />
              <InputForm label="last name" />
              <InputForm label="contact nº" />
            </View>

            <Button
              title="Next step"
              onPress={() => handleGoToNextStep("personal")}
            />
          </StepFormWrapper>

          <StepFormWrapper style={{ width: stepFormComponentWidth }}>
            <StepFormHeading title="Success!!" />
          </StepFormWrapper>
        </ScrollableContainer>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  signUpContainer: {
    width: "100%",
    borderRadius: 2,
    backgroundColor: "#2d0381",
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
  fieldsWrapper: {
    gap: 16,
  },
});
