import { ContentNav } from "../../../styles/StyHeader";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Player from "../loaders/player";

const Header = () => {
  let activeStyle = {
    textDecoration: "none",
    color: "#c41b54",
    fontWeight: "600",
  };

  let activeClassName = "underline";

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
 
  }, []);

  console.log(scrollPosition);


  return (
    <ContentNav bg={!scrollPosition == 0 ? "black" : undefined}>
      <ul>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
           
              <span>
                Resources
              </span>
          
          </NavLink>
        </li>
      </ul>

      <Player />
    </ContentNav>
  );
};

export default Header;
