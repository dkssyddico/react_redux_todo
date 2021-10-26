import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    box-sizing: border-box;
    padding-top: 30px;
    margin:0;
    background-color: lavender;
    width: 100%;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media only screen and (min-width: 390px) and (max-width: 767px) { 
      padding: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  input {
    all: unset;
  }
  
  p {
    margin: 0;
  }
`;

export default GlobalStyle;
