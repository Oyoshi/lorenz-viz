import styled, { css, ThemeProps, Theme } from "styled-components";

export const Button = styled.button(
  ({ theme }: ThemeProps<Theme>) => css`
    padding: 12px 22px;
    border-radius: ${theme.border.radius}px;
    outline-style: none;
    border-style: none;
    font-size: ${theme.font.sizes.regular}px;
    font-weight: ${theme.font.weights.bold};
    text-transform: uppercase;
    transition: ${theme.transition}ms;
    background-color: ${theme.colors.accent.background};
    color: ${theme.colors.accent.text};

    :hover {
      background-color: ${theme.colors.effect.background};
      color: ${theme.colors.effect.text};
    }
  `
);
