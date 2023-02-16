import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray900};
    padding-bottom: 2.5rem;
  `}
`;

export const WrapperContent = styled.div`
  margin-top: -1rem;
  margin-bottom: 2rem;
  padding: 0rem 1rem;

  @media (min-width: 800px) {
    margin-top: -3rem;
    margin-bottom: 4rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1.5rem;
  align-items: center;
  padding: 2.5rem 0rem 0rem;

  button {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    width: 15rem;
  }

  @media (min-width: 800px) {
    flex-direction: initial;
    justify-content: space-between;
    align-content: center;
    padding: 2.5rem 0rem;

    button {
      gap: 2rem;
    }
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-content: center;
    gap: 1.5rem;

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
      gap: 2.5rem;

      span {
        margin-left: auto;
      }
    }
  `}
`;
