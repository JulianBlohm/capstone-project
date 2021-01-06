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
    --primary-dark-red: #87272b;
    --secondary-dark-red: #610004;
  }

  body {
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    display: flex;
    justify-content: center;
    min-width: 300px;
  }

  a {
        text-decoration: none;
    }

  a:focus,
  button:focus {
    outline: none;
  }
`
