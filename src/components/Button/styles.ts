import styled, { css, DefaultTheme } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
  $fullWidth: boolean;
};

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
    color: ${theme.colors.gray700};

    &:hover {
      background-color: ${theme.colors.neutral300};
    }
  `,

  white: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutral400};
    border: 1px solid ${theme.colors.neutral700};
    width: 40px;
    height: 40px;

    &:hover {
      background-color: ${theme.colors.neutral500};
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
  ${({ theme, $styleType, $fullWidth }) => css`
    font-weight: 700;
    color: ${theme.colors.neutral400};
    border: none;
    border-radius: 8px;
    height: 48px;
    text-transform: uppercase;
    cursor: pointer;

    ${$styleType && WrapperModifier[$styleType](theme)}
    ${$fullWidth && WrapperModifier.fullWidth()}

    &:disabled {
      background-color: ${theme.colors.gray800};
      cursor: not-allowed;
    }
  `}
`;
