/* Global Stylesheet */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
    background-color: #eaeaea;
  }

  @media (min-width: 1200px) {
      .container{
          max-width: 1200px;
      }
  }

  .container {
    padding: 0px;
    margin-bottom: 15px;
  }

`;

export default GlobalStyle;
