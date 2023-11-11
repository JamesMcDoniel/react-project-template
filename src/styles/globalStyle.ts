import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  canvas, img, picture, svg, video {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  body {
    background-color: #ddd;
    color: #000;

    @media (prefers-color-scheme: dark) {
      background-color: #333;
      color: #fff;
    }
  }

  #root {
    isolation: isolate;
  }
`;
