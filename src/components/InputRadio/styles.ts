import styled, { css } from "styled-components";

export const Content = styled.label`
  ${() => css`
    display: flex;
    align-items: flex-end;
    padding: 0.5rem 1rem;
    gap: 1rem;

    @media (min-width: 800px) {
      padding: 0rem;
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
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    cursor: pointer;

    @media (min-width: 800px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`;
