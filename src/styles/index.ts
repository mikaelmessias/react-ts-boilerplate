import { createGlobalStyle } from 'styled-components';
import { normalize, reset } from './clear';

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
  }

  body, #root {
    height: 100%;
    min-height: 100%;
  }

  * {
    font-family: 'Arial', 'Tahoma', 'sans-serif';
  }
`;

export default GlobalStyle;
