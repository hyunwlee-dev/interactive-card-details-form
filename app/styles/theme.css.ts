import {
  createThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";

export const vars = createThemeContract({
  primary: {
    linearGradient: null,
    red: null,
  },
  netural: {
    white: null,
    lightGrayishViolet: null,
    darkGrayishViolet: null,
    veryDarkViolet: null
  },
  font: {
    bodyS: null,
    bodyM: null,
    bodyL: null,
    headingL: null,
    headingXL: null
  }
});

createGlobalTheme(":root", vars, {
  primary: {
    linearGradient: 'linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%))',
    red: 'hsl(0, 100%, 66%)',
  },
  netural: {
    white: 'hsl(0, 0%, 100%)',
    lightGrayishViolet: 'hsl(270, 3%, 87%)',
    darkGrayishViolet: 'hsl(279, 6%, 55%)',
    veryDarkViolet: 'hsl(278, 68%, 11%)'
  },
  font: {
    bodyS: "12px",
    bodyM: "12px",
    bodyL: "14px",
    headingL: "18px",
    headingXL: "28px",
  }
});
