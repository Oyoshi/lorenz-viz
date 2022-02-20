import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
  body {
     margin: 0;
    padding: 0;
    background-color: #ffffff;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
    -moz-appearance: textfield;
  }
`;
