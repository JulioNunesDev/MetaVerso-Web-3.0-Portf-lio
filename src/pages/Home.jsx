
import useDadosContext from "../hooks/useDados";
import { Content } from "../styles/StyHome";
import background from '../assets/background-one-home.png'
import engine from '../assets/engine.png'
import Header from "../shared/components/header";






const Home = () => {
    const {name} = useDadosContext()
    return ( 
        <Content>
            <Header />
            <img src={background} alt="" />
            <img className="engine" src={engine} alt="" />
        </Content>      
     );
}
 
export default Home;