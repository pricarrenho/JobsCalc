import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      background: ${theme.colors.background};
      font-family: ${theme.font.family};
    }

    h1,
    h2 {
      margin: 0;
    }

    a {
      text-decoration: none;
    }
  `}
`;
