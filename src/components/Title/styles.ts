import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gay800};
    font-size: ${theme.font.sizes.xlg};
  `}
`;
