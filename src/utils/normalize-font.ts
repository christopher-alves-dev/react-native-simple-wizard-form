import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const normalizeFont = (value: number) => {
  const { height } = Dimensions.get("window");
  const valueNormalized = RFValue(value, height);

  return valueNormalized;
};
