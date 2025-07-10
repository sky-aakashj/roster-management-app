import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family:  sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.grayLight};
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  button {
    font-family: inherit;
  }
  
  input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export default GlobalStyles;
