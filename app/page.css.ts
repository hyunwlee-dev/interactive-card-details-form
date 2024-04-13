import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "./styles/utils";

const main = style({});

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

const styles = {
  main,
  breakpointsTest,
};

export default styles;
