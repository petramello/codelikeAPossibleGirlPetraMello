import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: NexaHeavy;
    src: url(./assets/fonts/nexa-heavy-webfont.woff);
  }
  
  @font-face {
    font-family: NexaLight;
    src: url(./assets/fonts/nexa-light-webfont.woff);
  }
  
  @font-face {
    font-family: NexaBlack;
    src: url(./assets/fonts/nexa-black-webfont.woff);
  }
  
  @font-face {
    font-family: NexaRegular;
    src: url(./assets/fonts/nexa-regular-webfont.woff2);
  }
  
  @font-face {
    font-family: NexaBold;
    src: url(./assets/fonts/nexa-bold-webfont.woff);
  }

  @font-face {
    font-family: Futura;
    src: url(./assets/fonts/Futura-Book-font.ttf);
  }

  @font-face {
    font-family: FuturaLight;
    src: url(./assets/fonts/futura-light-bt.ttf);
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Futura', 'Didact Gothic', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
