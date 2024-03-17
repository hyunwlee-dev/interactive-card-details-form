import { globalStyle } from "@vanilla-extract/css";

globalStyle('*, *::before, *::after', {
  boxSizing: "border-box",
  padding: "0",
  margin: "0",
  overflowX: "hidden"
});

globalStyle('html, body', {
  minHeight: '100vh',
  fontSize: '18px',
  fontWeight: '500',
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
