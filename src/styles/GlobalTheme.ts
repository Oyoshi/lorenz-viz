import { createGlobalStyle, css, ThemeProps, Theme } from "styled-components";

export const GlobalTheme = createGlobalStyle(
  ({ theme }: ThemeProps<Theme>) => css`
    body {
      margin: 0;
      padding: 0;
      background-color: ${theme.colors.primary.background};
    }

    * {
      font-family: ${theme.font.family};
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
  `
);
