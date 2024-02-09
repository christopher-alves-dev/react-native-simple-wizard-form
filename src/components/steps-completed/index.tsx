import { StyleSheet, Text, View } from "react-native";
import { StepFormHeading } from "../step-form-heading";
import { CheckCircle } from "lucide-react-native";
import { normalizeFont } from "@/src/utils/normalize-font";
import { theme } from "@/src/utils/theme";

export const StepsCompleted = () => {
  return (
    <>
      <StepFormHeading title="Success!!" style={styles.heading} />

      <View style={styles.contentContainer}>
        <CheckCircle size={normalizeFont(100)} color={theme.colors.success} />

        <Text style={styles.description}>
          Your account has been created successfully!
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  heading: {
    textAlign: "center",
    fontSize: normalizeFont(32),
  },
  description: {
    fontSize: normalizeFont(20),
    textAlign: "center",
    color: theme.colors.disabled,
  },
});
