import { createGlobalStyle } from 'styled-components';
import * as theme from 'styles/theme';
import { normalize, reset } from './reset';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${reset};

  html {
    height: 100%;
    display: table;
  }

  html, body {
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  
  body {
    display: table-cell;
    -webkit-font-smoothing: antialiased !important;
    color: ${theme.text.gray};
  }

  body, #root {
    height: 100%;
    min-height: 100%;
  }

  * {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
