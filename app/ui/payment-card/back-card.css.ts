import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const backSide = style({
  position: "absolute",
  content: '',
  width: "286px",
  height: "157px",
  background: "url('/images/bg-card-back.png') no-repeat center / 100% 100%",
  top: '1.778rem',
  left: '50%',
  transform: 'translateX(-40%)',
  zIndex: "-100",
  '@media': {
    [$breakpoints.laptop]: {
      top: '50%',
      left: '30%',
    },
    [$breakpoints.desktop]: {
      width: "447px",
      height: "245px",
      top: '50%',
    },
  }
});

const cvc = style({
  position: 'absolute',
  color: vars.netural.white,
  top: '4.05rem',
  right: '2rem',
  fontSize: '9px',
  letterSpacing: '1.29px',
  '@media': {
    [$breakpoints.desktop]: {
      top: '6.25rem',
      right: '54px',
      fontSize: '14px'
    },
  }

});

const styles = {
  backSide,
  cvc
};
export default styles;
