import { ArrowLeftCircle } from "lucide-react-native";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "../components/button";
import { Divisor } from "../components/divisor";
import { InputForm } from "../components/input-form";
import { ScrollableContainer } from "../components/scrollable-container";
import { StepFormHeading } from "../components/step-form-heading";
import { StepFormWrapper } from "../components/step-form-wrapper";
import * as StepIndicator from "../components/step-indicator";
import { StepsCompleted } from "../components/steps-completed";
import { useStepScroll } from "../hooks/use-scroll-to";
import { normalizeFont } from "../utils/normalize-font";
import { signUpSteps } from "../utils/sign-up-steps";

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
              const isActive = stepsCompleted.includes(step.key);
              return (
                <StepIndicator.Container key={step.key} isActive={isActive}>
                  <StepIndicator.Label isActive={isActive}>
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
            <View style={styles.stepFormHeaderContainer}>
              <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={handleGoToPreviousStep}
              >
                <ArrowLeftCircle size={normalizeFont(24)} color={"#fff"} />
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
            <StepsCompleted />
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
    fontSize: normalizeFont(20),
    color: "#fff",
    textTransform: "capitalize",
  },
  stepsIndicatorContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepFormHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  backButtonContainer: {
    padding: 8,
  },
  fieldsWrapper: {
    gap: 16,
  },
});
