import { Theme } from "styled-components";

export const theme: Theme = {
  transition: 300,
  mediaQueries: {
    large: 992,
  },
  border: {
    radius: 6,
  },
  font: {
    family: "'Montserrat', sans-serif",
    weights: {
      regular: 400,
      bold: 500,
    },
    sizes: {
      regular: 14,
      headings: {
        h1: 24,
        h2: 18,
      },
    },
  },
  colors: {
    primary: {
      background: "#ffffff",
      text: "#20212c",
      input: "#dadce0",
      label: "#8d8d8d",
    },
    accent: {
      background: "#0a11eb",
      text: "#ffffff",
    },
    effect: {
      background: "#070cab",
      text: "#ffffff",
      input: "#0a11eb",
      label: "#8d8d8d",
    },
  },
};
