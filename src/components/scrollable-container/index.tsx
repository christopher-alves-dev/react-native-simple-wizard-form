import { ReactNode, RefObject, forwardRef } from "react";
import { ScrollView, StyleSheet } from "react-native";

export const ScrollableContainer = forwardRef(
  ({ children }: { children: ReactNode }, forwardedRef) => {
    return (
      <ScrollView
        style={style.container}
        contentContainerStyle={style.content}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        ref={forwardedRef as RefObject<ScrollView>}
      >
        {children}
      </ScrollView>
    );
  },
);

const style = StyleSheet.create({
  container: {
    flexGrow: 0,
    alignContent: "center",
    gap: 20,
  },
  content: {
    position: "relative",
  },
});
