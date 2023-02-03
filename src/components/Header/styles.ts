import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray900};
  `}
`;

export const WrapperGoBackHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.gray900};
    height: 88px;
    position: relative;

    h2 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: ${theme.colors.gray600};
      font-size: ${theme.font.sizes.sm};
      font-weight: 600;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;

    h2 {
      color: ${theme.colors.gray600};
      font-size: ${theme.font.sizes.sm};
      font-weight: 600;
    }
  `}
`;

export const ContentRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 16px;

    h2 {
      font-size: ${theme.font.sizes.md};
    }

    a {
      color: ${theme.colors.gray600};
      font-size: ${theme.font.sizes.xsm};
    }
  `}
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: 4px solid #f1972c;
`;
