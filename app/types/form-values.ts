type FormValues = {
  cardHolderName: string;
  cardNumber: string;
  mm: number;
  yy: number;
  cvc: number;
}

type Option = {
  [type: string]: {
    requireMessage?: string,
    patternMessage: string,
    pattern: RegExp,
    placeholder: string;
  }
}
