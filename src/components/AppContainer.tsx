import { styled } from "../configs";
import { baseVariants } from "../utils/styled";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  mx: "auto",

  width: 1200,
  maxWidth: "100%",
  px: "$s4",
  height: "fit-content",
  variants: {
    fluid: {
      true: {
        width: 1400,
      },
    },
    center: { true: {} },
    ...baseVariants,
  },
});
