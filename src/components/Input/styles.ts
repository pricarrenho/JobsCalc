import styled, { css } from "styled-components";

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.gray700};
    font-weight: 500;
    line-height: 24px;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.neutral400};
    font-size: ${theme.font.sizes.sm};
    font-family: ${theme.font.family};
    font-weight: 500;
    color: ${theme.colors.gray800};
    border: 1px solid ${theme.colors.neutral600};
    border-radius: 5px;
    width: 100%;
    min-height: 56px;
    padding-right: 16px;
    padding-left: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    outline: none;
    box-sizing: border-box;
  `}

  &:hover {
    border-color: #bfbfcc;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
