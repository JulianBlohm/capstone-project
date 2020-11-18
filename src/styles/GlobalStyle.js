import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --button: #0B79B9;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
  }
`