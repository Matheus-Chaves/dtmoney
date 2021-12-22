import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f8f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    //Os passos abaixo são feitos por questão de acessibilidade. 1rem = Tamanho do font-size
    @media (max-width: 1080px) { //tela menor que 1080px
      font-size: 93.75%; //16px -> vira 15px
    }

    @media (max-width: 720px) { //tela menor que 720px
      font-size: 87.5%; //16px -> vira 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  //É necessário editar a fonte nos elementos abaixo, não apenas no body, pois eles possuem uma fonte própria, sendo necessário sobrescrevê-la.
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`