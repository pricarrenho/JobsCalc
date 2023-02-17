import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray900};
    padding-bottom: 40px;
  `}
`;

export const WrapperContent = styled.div`
  margin-top: -16px;
  margin-bottom: 32px;
  padding: 0px 16px;

  @media (min-width: 800px) {
    margin-top: -48px;
    margin-bottom: 64px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
  align-items: center;
  padding: 40px 0px 0px;

  button {
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 16px;
    width: 240px;
  }

  @media (min-width: 800px) {
    flex-direction: initial;
    justify-content: space-between;
    align-content: center;
    padding: 40px 0px;

    button {
      gap: 32px;
    }
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-content: center;
    gap: 24px;

    span {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.lg};
      font-weight: 700;
      margin-left: 40%;
    }

    p {
      color: ${theme.colors.gray600};
    }

    @media (min-width: 800px) {
      gap: 40px;

      span {
        margin-left: auto;
      }
    }
  `}
`;
