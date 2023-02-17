import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      margin: 0;
      padding: 0;
      background: ${theme.colors.background};
    }

    body,
    input,
    a,
    label {
      font-family: ${theme.font.family};
    }

    h1,
    h2,
    h3,
    p {
      margin: 0;
    }

    h1,
    h2 {
      color: ${theme.colors.gray800};
    }

    span,
    label {
      font-weight: 500;
      line-height: 24px;
      font-size: ${theme.font.sizes.sm};
    }

    p {
      font-weight: 500;
      line-height: 24px;
      font-size: ${theme.font.sizes.xsm};
    }

    a {
      text-decoration: none;
    }
  `}
`;
