import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background: #41414c;
  padding-bottom: 2.5rem;
`;

export const WrapperContent = styled.div`
  margin-top: -3rem;
  margin-bottom: 4rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 2.5rem 0rem;

  button {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1rem;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-content: center;
    gap: 2.5rem;

    span {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.lg};
      font-weight: 700;
    }

    p {
      color: ${theme.colors.gray600};
    }
  `}
`;
