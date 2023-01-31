import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from "./types";

type WrapperProps = Pick<ButtonProps, "styleType" | "fullWidth">;

const WrapperModifier = {
  red: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.red900};

    &:hover {
      background-color: ${theme.colors.red800};
    }
  `,

  green: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green900};

    &:hover {
      background-color: ${theme.colors.green800};
    }
  `,

  gray: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutral700};

    &:hover {
      background-color: ${theme.colors.neutral300};
    }
  `,

  orange: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.orange900};

    &:hover {
      background-color: ${theme.colors.orange800};
    }
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
