import styled, { keyframes } from "styled-components";

const fade = keyframes`
from{opacity:0;}
to{opacity:1;}
`

export const Content = styled.section`
width: 100%;
height: 100vh;
animation: 2s ${fade};
background-color: var(--color-bg1);
display: flex;
justify-content: center;

`