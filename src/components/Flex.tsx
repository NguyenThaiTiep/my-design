import { ComponentProps } from "@stitches/react";
import { styled, theme } from "../configs";
import { baseVariants, generateVariants } from "../utils/styled";
const spaces = theme.space;

export const Flex = styled("div", {
  display: "flex",

  variants: {
    block: {
      true: {
        width: "100%",
      },
    },
    jusity: {
      center: {
        justifyContent: "center",
      },
      between: {
        justifyContent: "space-between",
      },
      end: {
        justifyContent: "flex-end",
      },
      start: {
        justifyContent: "flex-start",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
    },
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
    },
    wrap: {
      wrap: { flexWrap: "wrap" },
      nowrap: {
        flexWrap: "nowrap",
      },
      auto: {
        flexWrap: "inherit",
      },
    },
    gapX: generateVariants(["columnGap"], spaces),
    gapY: generateVariants(["rowGap"], spaces),
    gap: generateVariants(["gap"], spaces),
    ...baseVariants,
  },
  defaultVariants: {
    wrap: "nowrap",
  },
});

export type FlexProps = ComponentProps<typeof Flex>;
