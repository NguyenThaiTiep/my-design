import { styled, theme } from "../configs";
import { baseVariants, generateVariants } from "../utils/styled";

export const Paragraph = styled("p", {
  color: "$textColor",
  variants: {
    align: {
      justify: {
        textAlign: "justify",
      },
      center: {
        textAlign: "center",
      },
    },
    fontSize: generateVariants(["fontSize"], theme.fontSizes),
    ...baseVariants,
  },
});
