import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  #__next {
    
    background-color: black;
  }
`;

export default GlobalStyles;
