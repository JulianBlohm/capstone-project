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

  h2 {
        margin-bottom: 41px;
        font-size: 32px;
  }

  h3 {
        margin-bottom: 41px;
        line-height: 1.5;
        font-size: 26px;
    }

  span {
        font-weight: 300;
    }

  a {
        text-decoration: none;
    }
`
