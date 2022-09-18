import { createStitches, createTheme } from "@stitches/react";
const { styled, globalCss, config, css, theme } = createStitches({
  prefix: "onion",
  theme: {
    colors: {
      primary: "#C2E1DB",
      secondary: "#F1DFB7",
      textColor: "#5A5A5A",

      white: "#ffffff",
      black: "#000000",
      background: "",
    },
    radii: {},
    fontSizes: {
      sm: "0/875rem",
      md: "1rem",
      title: "1.5rem",
    },
    space: {
      s0: 0,
      s2: "0.125rem",
      s4: "0.25rem",
      s8: "0.5rem",
      s16: "1rem",
      s20: "1.25rem",
      s24: "1.5rem",
      s32: "2rem",
      s48: "3rem",
      s64: "4rem",
      s72: "4.5rem",
      s80: "5rem",
      s96: "6rem",
      s100: 100,
      auto: "auto",
    },
    sizes: {},
    fontWeights: {
      bold: "bold",
      bolder: "bolder",
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
  },
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1024px)",
    xxl: "(min-width: 1440px)",
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
