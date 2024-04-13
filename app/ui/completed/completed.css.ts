import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const completed = style({
  marginTop: '18rem',
  padding: '0 1.333rem',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
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

const image = style({
});

const heading1 = style({
  marginTop: '2rem',
  textTransform: 'uppercase',
  fontSize: vars.font.headingXL,
  letterSpacing: '3.42px',
  fontWeight: 400,
});

const paragraph = style({
  color: vars.netural.darkGrayishViolet
});

const btn = style({
  marginTop: '3rem',
  textTransform: 'capitalize'
});

const styles = {
  completed,
  image,
  heading1,
  paragraph,
  btn
}

export default styles;
