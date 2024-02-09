import { Platform } from "react-native";

export const normalizeByPlatform = (androidValue: number, iOSValue: number) => {
  return Platform.OS === "android" ? androidValue : iOSValue;
};
