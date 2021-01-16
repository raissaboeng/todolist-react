import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width:100%;
    height:100%auto;
  }

  body {
    text-align: center;
    font-family: 'Hind', sans-serif;
    font-size: 1rem;
    background-color: rgb(80, 100, 161);
    -webkit-font-smoothing: antialiased;
    }

    button{
      cursor:pointer;
      outline: none;
      border: none;
      text-align: center;
    }
`;

export default Global;