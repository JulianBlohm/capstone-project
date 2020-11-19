import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --button: #0B79B9;
  }

  body {
    font-size: 115%;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
  }

  span {
    font-size: 1rem;
    color: darkred;
  }
`