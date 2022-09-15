import { createStitches, createTheme } from "@stitches/react";
const { styled, globalCss, config, css, theme } = createStitches({
  prefix: "onion",
  theme: {
    colors: {
      primary: "#C2E1DB",
      secondary: "#F1DFB7",
      textColor: "#000000",

      background: "",
    },
    radii: {},
    space: {},
    sizes: {},
  },
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1400px)",
  },
  utils: {
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export { styled, globalCss, config, css, theme };
