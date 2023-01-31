import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from "./types";

type WrapperProps = Pick<ButtonProps, "styleType" | "fullWidth">;

const WrapperModifier = {
  red: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.red};
  `,

  green: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};
  `,

  gray: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutral700};
  `,

  orange: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.orange};
  `,

  fullWidth: () => css`
    width: 100%;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, styleType, fullWidth }) => css`
    font-family: ${theme.font.sizes.xsm};
    color: ${theme.colors.neutral400};
    padding: 12px;
    border: none;
    border-radius: 8px;
    height: 50px;
    cursor: pointer;

    ${styleType && WrapperModifier[styleType](theme)}
    ${fullWidth && WrapperModifier.fullWidth()}
  `}
`;
