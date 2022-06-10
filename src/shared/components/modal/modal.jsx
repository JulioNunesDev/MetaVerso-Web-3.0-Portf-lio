import styled, { keyframes } from "styled-components";

const anime = keyframes`
0%{opacity:0;}
50%{opacity:1;}
0%{opacity:0;}

`
const MModal = styled.div`
width: 300px;
height: 300px;
background-color: #373A3E;
position: absolute;
animation: 1s ${props=>props.animas} ;
top: 0px;


`

const Modal = ({modal}) => {
    return ( 
        <>
        <MModal animas={!modal ? anime : null}>
        <h1>Em Breve kkk</h1>
        </MModal>
        </>
     );
}
 
export default Modal;