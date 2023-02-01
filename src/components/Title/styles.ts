import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-size: ${theme.font.sizes.xlg};
    position: relative;
    margin-bottom: 24px;

    &::after {
      content: "";
      position: absolute;
      width: 641px;
      height: 0px;
      border: 1.5px solid #e1e3e5;
      bottom: -10px;
      left: 0px;
    }
  `}
`;
