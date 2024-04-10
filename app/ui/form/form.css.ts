import { vars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

const srOnly = style({
  overflow: 'hidden',
  position: 'absolute',
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'circle(0)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  whiteSpace: 'nowrap'
});

const inputWrapper = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  width: '100%',
  gap: '0.5rem',
});

const label = style({
  textTransform: 'uppercase',
  fontSize: vars.font.bodyS,
  letterSpacing: '1px',
});

const input = style({
  width: '100%',
  height: '2.5rem',
  textIndent: '0.889rem',
  border: `1px solid ${vars.netural.lightGrayishViolet}`,
  borderRadius: '8px',
  ':focus': {
    border: '1.5px solid transparent',
    background: `linear-gradient(white 0 0) padding-box, ${vars.primary.linearGradient} border-box`,
  }
});

const inputError = style({
  border: `1.5px solid ${vars.primary.red}`,
});

const error = style({
  display: 'block',
  fontSize: vars.font.bodyS,
  textTransform: 'capitalize',
  color: vars.primary.red
});

const styles = {
  inputWrapper,
  label,
  input,
  srOnly,
  inputError,
  error
};
export default styles;
