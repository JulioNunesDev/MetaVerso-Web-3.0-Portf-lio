

import { Content, SubContent, ThreeContent } from "../styles/StyHome";

import Button from "../shared/components/button/button";
import Header from "../shared/components/header";
import block from '../assets/blcok.png'
import web from '../assets/webb.png'
import eth from '../assets/eth.png'
import Footer from "../shared/components/footer/footer";


//imags display grid
import msMarvel from '../assets/ms.png';
import poke from '../assets/poke.png';
import dapp from '../assets/dapp.png';






const Home = () => {

  
    return ( 
        <>
        <Content >
         <Header/>
         <div className="contents">
             <div className="anima"> </div>
             <div className="tela"> </div>
             <div className="titles">
                 <h1>thinking outside the box</h1>
                 <p>the best way out of a problem</p>
                 <div className="btn">
                     <Button to='#text' />
                 </div>
             </div>
         </div>
        </Content>      
        <SubContent ld="" id="text">
            <div className="lineOne">
                <p>Estudando</p>
                <h1>O'que estou estudando.</h1>
                
            </div>

            <div className="lineTwo">
                <div className="card cinza">
                    <h1>Blockchain</h1>
                    <p>a blockchain é um livro-razão compartilhado e imutável que facilita o processo de registro de transações e o rastreamento de ativos em uma rede empresarial.</p>
                    
                    <img src={block} alt="" />

                </div>
                <div className="card">
                <h1>Web 3.0</h1>
                    <p> A versão 3.0 é construída sobre os conceitos centrais de descentralização, abertura e maior atuação do usuário.</p>
                    
                    <img src={web} alt="" />
                </div>
                <div className="card cinza">
                <h1>Ethereum</h1>
                    <p>Ethereum é uma plataforma descentralizada capaz de executar contratos inteligentes e aplicações descentralizadas usando a tecnologia blockchain.</p>
                    
                    <img src={eth} alt="" />
                </div>
            </div>
        </SubContent>
        <ThreeContent>
        <div className="lineOne">
                <p>Portfólio</p>
                <h1>Algumas coisas que fiz,<br/>
                    nesses 5 meses.</h1>
                
            </div>

            <div className="lineTwo">

               <div className="box details">
               <a
                href="https://poker-next-next-js.vercel.app/" target="_blank">

                <div className="ms">
                    <img src={poke} alt="projeto ms marvel" />
                    <h1>PokeNext</h1>
                 </div>
               </a>
                </div>



               <div className="box1 details">
               <a
                href="https://dapp-counter-meta-mask.vercel.app/" target="_blank">
                <div className="ms">
                    <img src={dapp} alt="projeto ms marvel" />
                    <h1>Dapp App</h1>
                 </div>
               </a>

               </div>

               <div className="box2 details"><h1>Em Breve</h1></div>
               <div className="box3 details">
                <a
                href="https://netflixjulionunes.netlify.app/" target="_blank">
                <div className="ms">
                    <img src={msMarvel} alt="projeto ms marvel" />
                    <h1>Netflix Projeto</h1>
                 </div>
               </a>
                </div>
               <div className="box4 details"><h1>Em Breve</h1></div>
               <div className="box5 details"><h1>Em Breve</h1></div>
               <div className="box6 details"><h1>Em Breve</h1></div>
            </div>
        </ThreeContent>
        <Footer/>
        </>
     );
}
 
export default Home;