import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --silver: #F5F5F7;
    --blue: #0B79B9;
    --red: #C34848;
    --green: #57B160;
    --gray: #767676;
    
  }

  body {
    font-size: 115%;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
  }
`
