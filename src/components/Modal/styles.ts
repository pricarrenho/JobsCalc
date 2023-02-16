import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.gray900}E6;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 20rem;

    background: ${theme.colors.neutral500};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    align-items: center;

    @media (min-width: 800px) {
      width: 28rem;
      height: 28rem;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: ${theme.colors.gray700};
      font-weight: 500;
    }
  `}
`;

export const ContentButton = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    width: 8rem;
  }

  @media (min-width: 800px) {
    button {
      width: 12rem;
    }
  }
`;
