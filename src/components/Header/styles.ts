import styled, { css } from "styled-components";

export const WrapperGoBackHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.gray900};
    margin-left: 2rem;
    height: 4rem;

    position: relative;

    h2 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: ${theme.colors.gray600};
      font-size: ${theme.font.sizes.sm};
      font-weight: 600;
    }

    @media (min-width: 800px) {
      margin-left: 0rem;
      height: 5.5rem;
    }
  `}
`;

export const Button = styled.button`
  background: none;
  border: none;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray900};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5.5rem;
    position: relative;
    gap: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;

    h2 {
      color: ${theme.colors.gray600};
      font-size: ${theme.font.sizes.sm};
      font-weight: 600;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0px;
      border: 1.5px solid ${theme.colors.gray800};
      bottom: -10px;
    }

    @media (min-width: 800px) {
      display: flex;
      gap: 0rem;
      margin-left: 0rem;
      margin-right: 0rem;
    }
  `}
`;

export const Alert = styled.div`
  h2 {
    display: none;
  }

  @media (min-width: 800px) {
    h2 {
      display: block;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const ContentRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 0rem;

    h2 {
      display: none;
    }

    a {
      color: ${theme.colors.gray600};
      font-size: ${theme.font.sizes.xsm};

      &:hover {
        color: ${theme.colors.orange800};
        text-decoration: underline;
      }
    }

    @media (min-width: 800px) {
      display: flex;
      align-items: center;
      flex-direction: initial;
      gap: 1rem;

      h2 {
        display: block;
        font-size: ${theme.font.sizes.md};
      }
    }
  `}
`;

export const Img = styled.img`
  ${({ theme }) => css`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    border: 4px solid ${theme.colors.orange900};

    @media (min-width: 800px) {
      width: 4rem;
      height: 4rem;
    }
  `}
`;
