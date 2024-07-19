import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    background-color: hsl(36, 100%, 99%);
  }

  body {
    background-color: hsl(36, 100%, 99%);
    padding: 10px;
    font-family: "Inter", sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
