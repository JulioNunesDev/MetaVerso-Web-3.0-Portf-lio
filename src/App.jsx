import { useEffect, useState } from "react"
import LayoutBase from "./layout/LayoutBase"
import Loading from "./shared/components/loaders/loading"



function App() {

 const [load, setLoad]=useState(true)



useEffect(()=>{
  setInterval(()=>{
    setLoad(true)

  },2000)

  return ()=>{
    clearInterval()
  }

},[])
  return (
    <>
    {load ? <LayoutBase /> :<Loading/>}
    
    
    </>
  )
}

export default App
