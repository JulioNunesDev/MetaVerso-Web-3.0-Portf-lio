import {createGlobalStyle} from 'styled-components'





export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;


    body::-webkit-scrollbar {
  width: 18px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #373A3E;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #c41b54;    /* color of the scroll thumb */
  border-radius: 10px;       /* roundness of the scroll thumb */
  /* creates padding around scroll thumb */
}
}

`