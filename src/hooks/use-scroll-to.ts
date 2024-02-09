import { useRef } from "react";
import { Dimensions, ScrollView } from "react-native";

export type StepsForm = "account" | "personal" | "complete";

export const useStepScroll = () => {
  const scrollRef = useRef<ScrollView>(null);
  const { width } = Dimensions.get("window");
  const stepFormComponentWidth = width - 40;

  const handleGoToNextStep = (nextStep: StepsForm) => {
    const formSteps = {
      personal: stepFormComponentWidth,
      complete: stepFormComponentWidth * 2,
    };

    scrollRef?.current?.scrollTo({
      x: formSteps[nextStep as keyof typeof formSteps],
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
