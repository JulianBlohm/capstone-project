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
    --primary-red: #C34848;
    --secondary-red: #6F2929;
    --primary-green: #57B160;
    --secondary-green: #3C7943;
    --gray: #767676;
    --FAQgray: #D9D9D9;
    --lightblack: #333333;
    
  }

  body {
    font-size: 115%;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
  }

  a {
        text-decoration: none;
    }
`
