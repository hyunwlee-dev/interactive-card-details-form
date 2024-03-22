import { globalStyle } from "@vanilla-extract/css";
import { $breakpoints } from "./utils";

globalStyle('*, *::before, *::after', {
  boxSizing: "border-box",
  padding: "0",
  margin: "0",
});

globalStyle('html, body', {
  minHeight: '100vh',
  fontSize: '18px',
  fontWeight: '500',
});

globalStyle('body::before', {
  position: "absolute",
  content: '',
  width: "100%",
  height: "240px",
  background: "url('/images/bg-main-mobile.png') no-repeat center / 100% 100%",
  inset: "0",
  zIndex: "-100",
  '@media': {
    [$breakpoints.laptop]: {
      width: "483px",
      height: "100%",
      background: "url('/images/bg-main-desktop.png') no-repeat center / 100% 100%"
    },
  }
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none'
});

globalStyle('li', {
  listStyle: 'none'
});

globalStyle('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer'
});
