import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import '../../App.css'
gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ duration:1, easel: "ease-in-out"})

function Main() {

 

  useEffect(()=>{

    const tl = gsap.timeline()

    tl.to(".S", {yPercent: -150,
       opacity: 0,
       

      })
      tl.to(".A", {yPercent: 100,
        opacity: 0,
        ease: "ease-in"
        
 
       })

    tl.to(".SB", {xPercent: 100})
    tl.to(".SC", {yPercent: -100})

    ScrollTrigger.create({
        animation: tl,
        trigger: ".painel",
        start: "top top",
        end: "+=1400px",
        scrub: 6,  
        markers: true
      
    })


  },[])

  
  return (
    <div className="App">

      <ul className='painel'>
          
      <div className='A'>
        
        <section className='S'>
        </section>
      </div>

      <div className='B'>
        <section className='SB'></section>
      </div>

      <div className='C'>
      <section className='SC'></section>
      </div>
      
      </ul>
    </div>
  )
}

export default Main
