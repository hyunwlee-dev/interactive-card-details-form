import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "./styles/utils";

const breakpointsTest = style({
  background: `${vars.netural.lightGrayishViolet}`,
  '@media': {
    [$breakpoints.mobile]: {
      background: 'red',
    },
    [$breakpoints.desktop]: {
      background: 'blue',
    }
  }
});

const form = style({
  outline: "3px solid blue",
  marginTop: "24rem"
});

const styles = {
  breakpointsTest,
  form
};

export default styles;
