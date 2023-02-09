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
    min-height: 3.5rem;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    outline: none;
    box-sizing: border-box;
  `}

  &:hover {
    border-color: #bfbfcc;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: #bfbfcc;
  }
`;
