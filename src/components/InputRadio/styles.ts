import styled, { css } from "styled-components";

export const Content = styled.label`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
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
    margin-left: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.5rem;
    cursor: pointer;
  `}
`;
