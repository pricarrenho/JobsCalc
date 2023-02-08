import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(#41414c 176px, #f0f2f5 176px);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: relative;
  padding: 2.5rem 0rem;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0px;
    border: 1.5px solid #4f4f5b;
    top: 0.5rem;
  }

  button {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1rem 2rem 1rem 0.5rem;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-content: center;
    gap: 2.5rem;
    line-height: 26px;

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
