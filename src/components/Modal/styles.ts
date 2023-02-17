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
    width: 320px;
    height: 320px;

    background: ${theme.colors.neutral500};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    align-items: center;

    @media (min-width: 800px) {
      width: 448px;
      height: 448px;
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
  gap: 8px;

  button {
    width: 128px;
  }

  @media (min-width: 800px) {
    button {
      width: 192px;
    }
  }
`;
