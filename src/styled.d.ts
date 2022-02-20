import "styled-components";

declare module "styled-components" {
  export interface Theme extends DefaultTheme {
    transition: number;
    mediaQueries: {
      large: number;
    };
    border: {
      radius: number;
    };
    font: {
      family: string;
      weights: {
        regular: number;
        bold: number;
      };
      sizes: {
        regular: number;
        headings: {
          h1: number;
          h2: number;
        };
      };
    };
    colors: {
      primary: {
        background: string;
        text: string;
        input: string;
        label: string;
      };
      accent: {
        background: string;
        text: string;
      };
      effect: {
        background: string;
        text: string;
        input: string;
        label: string;
      };
    };
  }
}
