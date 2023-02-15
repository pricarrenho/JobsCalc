import styled, { css, DefaultTheme } from "styled-components";
import { JobStatusProps } from "./types";

type WrapperProps = Pick<JobStatusProps, "type">;

const WrapperModifier = {
  done: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.red300};
    color: ${theme.colors.red900};
  `,

  started: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green300};
    color: ${theme.colors.green900};
  `,

  pendent: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutral300};
    color: ${theme.colors.gray700};
  `,
};

export const ContentStatus = styled.div<WrapperProps>`
  ${({ theme, type }) => css`
    border-radius: 40px;
    padding: 0.5rem 1.5rem;
    font-weight: 500;

    ${type && WrapperModifier[type](theme)}
  `}
`;
