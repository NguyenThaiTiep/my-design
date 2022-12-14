import { styled } from "../configs";
import { baseVariants } from "../utils/styled";

export const Image = styled("img", {
  maxWidth: "100%",
  maxHeight: "100%",
  variants: {
    ...baseVariants,
  },
});
