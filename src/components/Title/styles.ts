import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlg};
    position: relative;
    margin-bottom: 1.5rem;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 0px;
      border: 1.5px solid #e1e3e5;
      bottom: -10px;
      left: 0px;
    }
  `}
`;
