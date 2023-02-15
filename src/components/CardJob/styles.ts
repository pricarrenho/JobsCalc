import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1.5fr 1.2fr repeat(3, 1fr);
    padding: 0rem 2rem;
    background-color: ${theme.colors.white};
    height: 6rem;
    border-radius: 8px;
    margin-bottom: 8px;
    position: relative;

    &:hover {
      background: linear-gradient(
        90deg,
        rgba(241, 151, 44, 1) 0.5%,
        rgba(250, 232, 210, 1) 0.5%,
        rgba(251, 251, 251, 1) 29%
      );
    }
  `}
`;

export const FirstContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      color: ${theme.colors.gray600};
    }

    h2 {
      size: ${theme.font.sizes.lg};
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
    gap: 0.5rem;

    button {
      width: 50px;
    }
  `}
`;
