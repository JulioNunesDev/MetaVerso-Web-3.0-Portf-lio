import { useEffect, useState } from "react";
import { createContext } from "react";


export const ContextDadosButtoes = createContext()


export const AppDadosContext = ({children})=>{
    const [name, setName]=useState('')

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });

         
      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        handleScroll()
    },[])

    return(
        <ContextDadosButtoes.Provider value={{}}>
            {children}
        </ContextDadosButtoes.Provider>
    )
} 