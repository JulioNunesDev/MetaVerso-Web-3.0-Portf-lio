import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './GlobalStyles'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AppDadosContext } from './context/ToggleButtoes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <AppDadosContext>
     <Routes>
       <Route path='/' element={ <App />}/>
     </Routes>
    </AppDadosContext>
    </BrowserRouter>
    <GlobalStyle/>
  </React.StrictMode>
)
