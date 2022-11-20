import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root{
    height: 100%;
  }

  *, button, input{
    border:0;
    outline:0;
    font-family: "Roboto", sans-serif;
  }
  button{
    cursor:pointer;
  }
`
export default GlobalStyle;


