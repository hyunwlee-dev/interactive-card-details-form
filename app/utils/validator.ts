const REQUIRE_MESSAGE = `can't be blank`;

export const option: Option = {
  cardHolderName: {
    requireMessage: REQUIRE_MESSAGE,
    patternMessage: `wrong format, letters only`,
    pattern: /^[A-Za-z\s]+$/,
    placeholder: `e.g. Jane Appleseed`
  },
  cardNumber: {
    requireMessage: REQUIRE_MESSAGE,
    patternMessage: `wrong format, numbers only`,
    pattern: /^[0-9\s]+$/,
    placeholder: `e.g. 1234 5678 9123 0000`
  },
  mm: {
    requireMessage: REQUIRE_MESSAGE,
    patternMessage: `wrong format`,
    pattern: /^0[1-9]|1[0-2]$/,
    placeholder: `MM`
  },
  yy: {
    requireMessage: REQUIRE_MESSAGE,
    patternMessage: `wrong format`,
    pattern: /^\d{2}$/,
    placeholder: `YY`
  },
  cvc: {
    requireMessage: REQUIRE_MESSAGE,
    patternMessage: `wrong format`,
    pattern: /^\d{3}$/,
    placeholder: `e.g. 123`
  },
} as const;
