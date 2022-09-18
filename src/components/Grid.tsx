import { styled, theme } from "../configs";
import { generateVariants } from "../utils/styled";
import { Box } from "./Box";

type GridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const generateColumnVariants = () => {
  const variants: ObjectKeys = {};
  for (let i = 1; i <= 12; i++) {
    variants[i] = {
      gridTemplateColumns: `repeat(${i}, 1fr)`,
    };
  }
  return variants as {
    [key in GridColumn]: any;
  };
};

export const Grid = styled(Box, {
  display: "grid",
  variants: {
    column: generateColumnVariants(),
    justify: {
      center: {
        justifyContent: "center",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
    },
    gap: generateVariants(["gap"], theme.space),
    gapX: generateVariants(["columnGap"], theme.space),
    gapY: generateVariants(["rowGap"], theme.space),
  },
});
