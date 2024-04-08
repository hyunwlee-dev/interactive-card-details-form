import { vars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

const button = style({
  width: "100%",
  height: "2.944rem",
  borderRadius: "0.5rem",
  fontWeight: "500",
  letterSpacing: "1px"
});

const primary = style({
  background: vars.netural.veryDarkViolet,
  color: vars.netural.white,
});

const secondary = style({
  background: vars.netural.lightGrayishViolet,
});

const styles = { button, primary, secondary };

export default styles;
