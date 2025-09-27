import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Add your global styles here */
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Text selection styles */
  ::selection {
    background: rgba(255, 167, 38, 0.3);
    color: inherit;
  }
  
  /* For Firefox */
  ::-moz-selection {
    background: rgba(255, 167, 38, 0.3);
    color: inherit;
  }
  
  /* Standard syntax */
  ::selection {
    background: rgba(255, 167, 38, 0.3);
    color: inherit;
  }

  /* Add any other global styles you need */
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
