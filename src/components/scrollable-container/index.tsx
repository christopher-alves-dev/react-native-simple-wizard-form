import { ReactNode, RefObject, forwardRef } from "react";
import { ScrollView } from "react-native";

export const ScrollableContainer = forwardRef(
  ({ children }: { children: ReactNode }, forwardedRef) => {
    return (
      <ScrollView
        style={{
          flexGrow: 0,
          alignContent: "center",
          gap: 20,
        }}
        contentContainerStyle={{
          position: "relative",
        }}
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
