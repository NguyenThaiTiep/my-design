import { styled, theme } from "../configs";
import { baseVariants, generateVariants } from "../utils/styled";

export const Text = styled("span", {
  color: "$textColor",
  variants: {
    weight: generateVariants(["fontWeight"], theme.fontWeights),
    size: generateVariants(["fontSize"], theme.fontSizes),
    block: {
      true: {
        display: "inline-block",
      },
    },
    ...baseVariants,
  },
});
