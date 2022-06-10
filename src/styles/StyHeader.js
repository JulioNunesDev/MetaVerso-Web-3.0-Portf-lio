import styled from 'styled-components';

export const ContentNav = styled.nav`
    width: 100%;
    height: auto;
   padding: 15px;
   position: fixed;
   display: flex;
   align-items: center;
   z-index: 10;
   top: 0;
   background-color: ${props=>props.bg};
   left: 0;
   transition: .2s ease-in-out;
   overflow: hidden;
   
    
    ul{
       

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
       
        font-size: 15px;
        font-family: var(--font-popis);
        color: #fafafa;

    }

  a{
      font-size: 17px;
      color: #fafafa;
  }

`;
