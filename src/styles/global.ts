import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    /* Typography */
    /*--family: 'Nunito Sans', sans-serif;*/
    --fs-sm: 18px;
    /*--fs-md: 16px;*/
    --fw-light: 300;
    --fw-normal: 600;
    --fw-bold: 800;

    /* Other */
    
  }

  body {
    -active-input-border: hsl(249, 99%, 64%) to hsl(278, 94%, 30%);
    --input-error-color: hsl(0, 100%, 66%);
    --color-bg: hsl(0, 10%, 100%);
    --colors-light: hsl(270, 3%, 87%);
    --colors-dark: hsl(279, 6%, 55%);
    --colors-very-dark: hsl(278, 68%, 11%);
    --shadow: rgba(23, 2, 2, 0.2) 0 0 8px;
    --radii: 10px;
    
    background-color: var(--color-bg);
    font-size: 18px;
    font-family: 'Space Grotesk', sans-serif;

  }

`

export default GlobalStyle