import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    position: relative;
    margin: 16px;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 0px;
      border: 1.5px solid ${theme.colors.neutral600};
      bottom: -10px;
      left: 0px;
    }

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.xlg};
      margin: 0px 0px 24px;
    }
  `}
`;
