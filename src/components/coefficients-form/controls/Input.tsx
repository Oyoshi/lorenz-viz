import styled, { css, ThemeProps, Theme } from "styled-components";
import { IInputProps } from "./Input.interface";

const InputGroup = styled.div`
  position: relative;
  margin: 12px 0;
`;

const InputLabel = styled.label(
  ({ theme }: ThemeProps<Theme>) => css`
    color: ${theme.colors.primary.label};
    position: absolute;
    top: 27px;
    left: 55px;
    background: ${theme.colors.primary.background};
    transition: ${theme.transition}ms;
    transform: translate(-50%, -50%);
  `
);

const InputField = styled.input(
  ({ theme }: ThemeProps<Theme>) => css`
    outline: none;
    padding: 12px 16px;
    border: 1px solid ${theme.colors.primary.input};
    font-size: ${theme.font.sizes.regular}px;
    font-weight: ${theme.font.weights.regular};
    border-radius: ${theme.border.radius}px;
    transition: ${theme.transition}ms;

    &:focus {
      border: 1px solid ${theme.colors.effect.input};
    }

    &:valid + ${InputLabel} {
      top: -1px;
      padding: 0 3px;
      font-size: ${theme.font.sizes.regular}px;
      color: ${theme.colors.effect.label};
    }

    &:focus + ${InputLabel} {
      top: -1px;
      padding: 0 3px;
      font-size: ${theme.font.sizes.regular}px;
      color: ${theme.colors.effect.input};
      transition: ${theme.transition}ms;
    }
  `
);

export const Input: React.FC<IInputProps> = ({ id, label, ...rest }) => {
  return (
    <InputGroup>
      <InputField id={id} {...rest} />
      <InputLabel htmlFor={id}>{label}</InputLabel>
    </InputGroup>
  );
};
