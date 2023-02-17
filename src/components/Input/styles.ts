import styled, { css } from "styled-components";

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.gray700};
    font-weight: 500;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.neutral400};
    font-size: ${theme.font.sizes.sm};
    font-weight: 500;
    color: ${theme.colors.gray800};
    border: 1px solid ${theme.colors.neutral600};
    border-radius: 5px;
    width: 100%;
    min-height: 56px;
    padding-right: 16px;
    padding-left: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    outline: none;
    box-sizing: border-box;

    &:hover {
      border-color: ${theme.colors.gray600};
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    @media (min-width: 800px) {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  `}
`;
