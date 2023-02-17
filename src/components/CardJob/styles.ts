import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position: relative;
    border-radius: 8px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: center;
    justify-content: center;
    height: auto;
    gap: 16px;
    text-align: center;

    &:hover {
      background: linear-gradient(
        90deg,
        rgba(241, 151, 44, 1) 0.5%,
        rgba(250, 232, 210, 1) 0.5%,
        rgba(251, 251, 251, 1) 29%
      );
    }

    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: 1.5fr 1.2fr repeat(3, 1fr);
      padding: 0px 32px;
      height: 96px;
    }
  `}
`;

export const FirstContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 32px;

    span {
      display: none;
      color: ${theme.colors.gray600};
    }

    h2 {
      font-size: ${theme.font.sizes.lg};
    }

    @media (min-width: 800px) {
      span {
        display: block;
      }
    }
  `}
`;

export const MiddleContents = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      color: ${theme.colors.gray600};
      font-weight: 600;
    }

    p {
      color: ${theme.colors.gray700};
      font-weight: 600;
    }
  `}
`;

export const ContainerStatus = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const ContentButtons = styled.div`
  ${() => css`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;

    button {
      width: 40px;
    }

    @media (min-width: 800px) {
      button {
        width: 50px;
      }
    }
  `}
`;
