import styled, { css } from "styled-components";

export const WrapperGoBackHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.gray900};
    margin-left: 32px;
    height: 64px;

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
      margin-left: 0px;
      height: 88px;
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
    height: 88px;
    position: relative;
    gap: 16px;
    margin-left: 16px;
    margin-right: 16px;

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
      border: 1px solid ${theme.colors.gray800};
      bottom: -10px;
    }

    @media (min-width: 800px) {
      display: flex;
      gap: 0px;
      margin-left: 0px;
      margin-right: 0px;
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
      gap: 8px;
    }
  }
`;

export const ContentRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 0px;

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
      gap: 16px;

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
    width: 32px;
    height: 32px;
    border: 4px solid ${theme.colors.orange900};

    @media (min-width: 800px) {
      width: 64px;
      height: 64px;
    }
  `}
`;
