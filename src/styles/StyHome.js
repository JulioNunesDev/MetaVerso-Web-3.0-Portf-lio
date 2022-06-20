import styled, { keyframes } from "styled-components";
import pe from '../assets/person.png'
import tela from '../assets/tela.png'


const anima = keyframes`
0%{transform: translateY(0px);}
50%{transform: translateY(100px);}
100%{transform: translateY(0px);}
`

const fade = keyframes`
from{opacity:0;}
to{opacity:1;}
`

export const Content = styled.section`
animation: 2s ${fade};
width: 100%;
height: 100%;
background-image: linear-gradient(135deg, #373a3e 0%, #5a5c60 48%, #373a3e 100%);
z-index: -1;







.contents{
   
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-image: url(${tela});
    background-repeat: no-repeat;
   background-position-x: 200%;
   background-position-y: -400px;
    z-index: 2;
    
    .anima{
       position: absolute;
        background-image: url(${pe});
        width: 100%;
        height: 100%;
        z-index: 1;
        animation: 7s ${anima} linear infinite backwards;
        display: flex;
        background-attachment: fixed;
   background-repeat: no-repeat;
   background-position-x: 80%;
   background-position-y: 30%;
    }

    .tela{

    }




    .titles{
        z-index: 2;
        width: 500px;
        height: 500px;
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      

        h1{
            font-size: 60px;
            font-family: var(--font-bebas);
            color: #fafafa;
        }

        p{
            font-size: 22px;
            font-family: var(--font-bebas);
            color: #fafafa;
        }

    }
    .photos{
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img{
            width: 500px;
            height: 500px;
        }
    }
}

@media not screen and (min-width: 844px)  {
    
        .contents{
            position: relative;

            overflow: hidden;
            .anima{
       position: absolute;
        background-image: url(${pe});
        width: 500px;
        height: 100%;
        background-size: contain;
        z-index: 1;
        animation: 7s ${anima} linear infinite backwards;
        display: flex;
        background-attachment: fixed;
   background-repeat: no-repeat;
   background-position-x: center;
   background-position-y: center;
    }

            .titles{
        width: 500px;
        height: 500px;

        h1{
            font-size: 50px;
            font-family: var(--font-bebas);
            color: #fafafa;
        }

        p{
            font-size: 22px;
            font-family: var(--font-bebas);
            color: #fafafa;
        }

    }

    

      
        }
}


`

export const SubContent = styled.section`
padding-bottom: 85px;
width: 100%;
height: auto;
background-color: #232428;

.lineOne{
    position: relative;
    width: 100%;
    height: 40%;
    text-align: center;
    margin-bottom: 25px;

    h1{
        color: #fafafa;
        font-size: 35px;
        text-transform: capitalize;
        padding-top: 150px;
        font-family: var(--font-roboto);
    }


    p{
        font-size: 120px;
        font-weight: bold;
        font-family: var(--font-roboto);
        position: absolute;
        left: 50px;
        background: transparent;
        color:  #232428;
        opacity: 20%;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;

    }

}
.lineTwo{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-around;
       flex-wrap: wrap;
       gap: 10px;

        .card{
            background-color: #c41b54;
            width: 350px;
            height: 300px;
            color: #fafafa;
            padding: 15px;
            border-radius: 10px;
           display: flex;
           justify-content: center;
           flex-direction: column;
           align-items: center;
           

            
          

            h1{
                font-family: var(--font-roboto);
                font-size: 25px;
                margin-bottom: 10px;
            }
            p{
                font-family: var(--font-roboto); 
                font-size: 16px;
               
                
            }
            img{
                width: 150px;
                height: 150px;
                object-fit: contain;
                transition: .2s ease-in-out;
            }
            img:hover{
               transform: scale(1.1);
            }
        }

        .cinza{
            background-color: #373A3E;
        }
        
    }

@media not screen and (min-width: 844px) {
    .lineOne{
        p{
            font-size: 80px;
        font-weight: bold;
        font-family: var(--font-roboto);
        position: absolute;
        left: 50px;
        background: transparent;
        color:  #232428;
        opacity: 20%;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;
        }
    }
}

`

export const ThreeContent= styled.section`
width: 100%;
height: auto;
background-color: #373A3E;
overflow: hidden;

.lineOne{
    position: relative;
    width: 100%;
    height: 50%;
    text-align: center;
    margin-bottom: 25px;
    
    h1{
        color: #fafafa;
        font-size: 35px;
        width: 100%;
        display: flex;
        justify-content: center;
        text-transform: capitalize;
        padding-top: 150px;
        font-family: var(--font-roboto);
    }


    p{
        font-size: 120px;
        font-weight: bold;
        font-family: var(--font-roboto);
        position: absolute;
        left: 50px;
        background: transparent;
        color:  #232428;
        opacity: 30%;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;

    }

}
.lineTwo{
    padding-top: 50px;
    padding-bottom: 50px;
        justify-content: center;
      flex-wrap: wrap;
       width: 100%;
       height:auto; 
       display: grid;
     
       flex-wrap: wrap;
       gap: 20px;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: repeat(4, 300px);

    h1{
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fafafa;
    }

    .details{
        border-radius: 10;
        transition: .2s ease-in;
        cursor: cell;
    }
    .details:hover{
        border-radius: 10px;
        transform: scale(1.1);
    }

       .box{
          grid-column: 1;
        background-color:#232428;
           width: 300px;
           height: 300px;

           .ms{
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            
          
            
            
            img{
                object-fit: cover;
                width: 100%;

                height: 100%;
           }

           h1{
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 10px 20px;
            background-color:var(--color-bg2);
            position: absolute;
            border-radius: 10px;
            display: none;
            transition: 0.2s ease-in-out;
            font-family: var(--font-roboto);
           }

        }
           


           
       }

       .box1{
           width: 300px;
           height: 300px;
           background-color:#232428;

           .ms{
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            
          
            
            
            img{
                object-fit: cover;
                width: 100%;

                height: 100%;
           }

           h1{
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 10px 20px;
            background-color:var(--color-bg2);
            position: absolute;
            border-radius: 10px;
            display: none;
            transition: 0.2s ease-in-out;
            font-family: var(--font-roboto);
           }

        }
           
       }

       .box2{
          grid-column: 3 ;
           background-color: #232428;
           width: 300px;
           height: 100%;
           grid-row: 1 / 3;
           
       }
       .box3{
          grid-column: 1 / 3 ;
           background-color: #232428;
           width: 100%;
           height: 100%;
           grid-row: 2 ;
           overflow: hidden;

          .ms{
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            
          
            
            
            img{
                object-fit: fill;
                width: 100%;

                height: 100%;
           }

           h1{
            top: 50%;
            left: 50%;
            padding: 10px 20px;
            background-color:var(--color-bg2);
            position: absolute;
            border-radius: 10px;
            display: none;
            transition: 0.2s ease-in-out;
            font-family: var(--font-roboto);
           }

        }
           
       }
       .ms:hover h1{
        display: block;
       }

       .box4{
          grid-column: 1 ;
    background-color: #232428;
           width: 100%;
           height: 100%;
           grid-row: 3 ;
           
       }
       .box5{
          grid-column: 2 / 4 ;
           background-color: #232428;
           width: 100%;
           height: 100%;
           grid-row: 3 / 5;
           
       }
       .box6{
          grid-column: 1 ;
           background-color: #232428;
           width: 100%;
           height: 100%;
           grid-row: 4;
           
       }
    }

    @media not screen and (min-width: 844px) and (min-width: 475px)  {

      
    .lineOne{
        p{
            font-size: 80px;
        font-weight: bold;
        font-family: var(--font-roboto);
        position: absolute;
        left: 50px;
        background: transparent;
        color:  #232428;
        opacity: 20%;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;
        }
    }

        .lineTwo{
            .details{
            display: flex;
            width: 100%;
            height: auto;
            display: grid;
            padding-bottom: 50px;
            justify-content: space-around;
            grid-template-columns: 1fr;
         
        }
            .box {
                width: 100%;
                height: 100%;
                grid-column: 2;
                grid-row: 1;
            }
            .box1 {
                width: 100%;
                height: 100%;
                grid-column: 2;
                grid-row: 2;
            }
            .box2 {
                width: 100%;
                height: 100%;
                grid-column: 2;
                grid-row: 3;
            }
            .box3 {
                width: 100%;
                height: 100%;
                grid-column: 2;
                grid-row: 4;
            }
            .box4 {
                display: none;
            }
            .box5 {
                display: none;
            }

            .box6 {
               display: none;
            }
           
        }

       
        
        
    }

`