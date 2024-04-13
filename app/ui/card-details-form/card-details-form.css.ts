import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme.css";

const form = style({
  marginTop: "18rem",
  padding: '0 1.333rem'
});

const cardholderName = style({
  marginBottom: '1.111rem'
});

const cardNumber = style({
  marginBottom: '1.111rem'
});

const dateCvcWrapper = style({
  display: 'flex',
  gap: '0.611rem',
  marginBottom: '1.556rem'
});

const dateFieldset = style({
  width: '50%',
  flex: '1 0 auto',
  display: 'grid',
  gridTemplate: "'legend legend' auto 'mm yy' auto / minmax(auto, 4.444rem) minmax(auto, 4.444rem)",
  columnGap: '0.444rem',
  padding: 0,
});

const dateLegend = style({
  fontSize: vars.font.bodyS,
  paddingBottom: '0.444rem',
  gridArea: 'legend',
  textTransform: 'uppercase'
});

const mm = style({
  gridArea: 'mm',
  fontSize: '1rem',
});

const yy = style({
  gridArea: 'yy',
  fontSize: '1rem',
});

const cvc = style({
  width: '50%',
  flex: '1 1 auto',
});

const submitBtn = style({
  marginBottom: '1rem'
});

const styles = {
  form,
  dateCvcWrapper,
  dateFieldset,
  dateLegend,
  cardholderName,
  cardNumber,
  mm,
  yy,
  cvc,
  submitBtn
};

export default styles;
