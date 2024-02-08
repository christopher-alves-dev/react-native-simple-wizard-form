import { useRef } from "react";
import { Dimensions, ScrollView } from "react-native";

type stepsForm = "account" | "personal";

export const useStepScroll = () => {
  const scrollRef = useRef<ScrollView>(null);
  const { width } = Dimensions.get("window");
  const stepFormComponentWidth = width - 40;

  const handleGoToNextStep = (currentStep: stepsForm) => {
    const formSteps = {
      account: stepFormComponentWidth,
      personal: stepFormComponentWidth * 2,
    };

    scrollRef?.current?.scrollTo({
      x: formSteps[currentStep as keyof typeof formSteps],
    });
  };

  const handleGoToPreviousStep = () => {
    scrollRef?.current?.scrollTo({
      x: 0,
    });
  };

  return {
    scrollRef,
    stepFormComponentWidth,
    handleGoToNextStep,
    handleGoToPreviousStep,
  };
};
