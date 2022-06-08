
import useDadosContext from "../hooks/useDados";
import { Content } from "../styles/StyHome";

const Home = () => {
    const {name} = useDadosContext()
    return ( 
        <Content>
            <h1>Home landing Page</h1>
            <h1>Criado por: {name}</h1>
        </Content>      
     );
}
 
export default Home;