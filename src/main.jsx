import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './GlobalStyles'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AppDadosContext } from './context/ToggleButtoes'
import About from './pages/About'
import Header from './shared/components/header'
import Resources from './pages/Resources'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <AppDadosContext>
      <Header/>
     <Routes>
       <Route path='/' element={ <App />}/>
       <Route path='/about' element={ <About/>}/>
       <Route path='/resources' element={ <Resources/>}/>
       <Route path='*' element={ <App/>}/>
     </Routes>
    </AppDadosContext>
    </BrowserRouter>
    <GlobalStyle/>
  </React.StrictMode>
)
