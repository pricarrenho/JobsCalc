import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-content: center;
    background-color: ${theme.colors.white};
    height: 6rem;
    border-radius: 8px;
    margin-bottom: 8px;
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
      line-height: 22px;
    }

    p {
      color: ${theme.colors.gray700};
      font-weight: 600;
      line-height: 26px;
    }
  `}
`;

export const ContainerStatus = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
  `}
`;

export const ContentStatus = styled.div`
  ${({ theme }) => css`
    background-color: #e8f8e8;
    border-radius: 40px;
    padding: 0.5rem 1.5rem;
    color: ${theme.colors.green800};
    font-weight: 500;
  `}
`;

export const ContentButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;
  `}
`;
