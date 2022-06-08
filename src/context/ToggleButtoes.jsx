import { useState } from "react";
import { createContext } from "react";


export const ContextDadosButtoes = createContext()


export const AppDadosContext = ({children})=>{
    const [name, setName]=useState('Julio Nunes')
    return(
        <ContextDadosButtoes.Provider value={{name}}>
            {children}
        </ContextDadosButtoes.Provider>
    )
} 