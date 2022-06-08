import { useContext } from "react";
import { ContextDadosButtoes} from "../context/ToggleButtoes";

const useDadosContext = () => {
    const context = useContext(ContextDadosButtoes)
    return context
}
 
export default useDadosContext;