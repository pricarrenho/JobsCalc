import styled, { css } from "styled-components";

export const Content = styled.label`
  ${() => css`
    display: flex;
    align-items: flex-end;
    padding: 8px 16px;
    gap: 16px;

    @media (min-width: 800px) {
      padding: 0px;
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.gray700};
    font-weight: 500;
  `}
`;

export const Input = styled.input`
  ${() => css`
    width: 16px;
    height: 16px;
    margin-top: 8px;
    cursor: pointer;

    @media (min-width: 800px) {
      width: 24px;
      height: 24px;
    }
  `}
`;
