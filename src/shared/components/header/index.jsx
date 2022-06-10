import { ContentNav } from "../../../styles/StyHeader";
import { NavLink } from "react-router-dom";
import { useState, useEffect} from "react";
import Player from "../loaders/player";




const Header = () => {
    let activeStyle = {
        textDecoration: "none",
        color: '#c41b54',
        fontWeight: '600'
        
      };
    
      let activeClassName = "underline";


      const [scrollPosition, setScrollPosition] = useState(0);
      const handleScroll = () => {
          const position = window.pageYOffset;
          setScrollPosition(position);
      };


      
      useEffect(() => {
          window.addEventListener('scroll', handleScroll, { passive: true });

         
      
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
          handleScroll()
      }, []);

   

      console.log(scrollPosition)

    

      function handleModal(){
        alert('Finalizado ate dia 30!')

      }
    
    return ( 
        <ContentNav bg={!scrollPosition == 0  ? 'black': undefined }>
            <ul>
          
            <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            onClick={handleModal}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
           Home
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
                onClick={handleModal}
              >
                Resources
              </span>
            )}
            
          </NavLink>
        </li>
               
            </ul>
            
            <Player/>
        </ContentNav>
     );
}
 
export default Header;