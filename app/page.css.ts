import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "./styles/utils";

const cardDetailsForm = style({
  marginTop: "18rem",
  padding: '0 1.333rem',
  '@media': {
    [$breakpoints.laptop]: {
      marginTop: '0',
      position: 'absolute',
      minWidth: "200px",
      width: "447px",
      top: '50%',
      left: '70%',
      transform: 'translate(-50%, -50%)',
    },
  }
});

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
  cardDetailsForm,
  main,
  breakpointsTest,
};

export default styles;
