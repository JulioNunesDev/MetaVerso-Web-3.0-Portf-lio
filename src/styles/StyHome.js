import styled from "styled-components";


export const Content = styled.section`

width: 100%;
height: 100vh;
position: fixed;

img{
    background-size: contain;
    width: 100%;
    height: 100%;
    z-index: -2;
    object-fit: cover;
}

.engine{
    position: relative;
    z-index: 1;
    width: 500px;
    height: 500px;
}


`