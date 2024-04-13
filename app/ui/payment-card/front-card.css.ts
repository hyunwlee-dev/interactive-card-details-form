import { vars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

const frontSide = style({
  position: "absolute",
  content: '',
  width: "286px",
  height: "157px",
  background: "url('/images/bg-card-front.png') no-repeat center / 100% 100%",
  top: '6.7rem',
  left: '50%',
  transform: 'translateX(-60%)',
  zIndex: "-100",
});

const logo = style({
  position: 'absolute',
  top: '17.6px',
  left: '19px',
});

const cardholderName = style({
  position: 'absolute',
  color: vars.netural.white,
  bottom: '19.6px',
  left: '19px',
  fontSize: '9px',
  letterSpacing: '1.29px'
});

const cardNumber = style({
  position: 'absolute',
  color: vars.netural.white,
  bottom: '48.6px',
  left: '19px',
  letterSpacing: '1.29px'
});

const date = style({
  position: 'absolute',
  color: vars.netural.white,
  bottom: '19.6px',
  right: '19px',
  fontSize: '9px',
  letterSpacing: '1.29px'
});

const styles = {
  frontSide,
  logo,
  cardholderName,
  cardNumber,
  date,
};
export default styles;
