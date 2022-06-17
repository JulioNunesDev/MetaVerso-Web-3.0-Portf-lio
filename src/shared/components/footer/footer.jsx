import styled from "styled-components";
import bone from "../../../assets/bone.png";
import git from "../../../assets/bg/git.png";
import insta from "../../../assets/bg/insta.png";
import linke from "../../../assets/bg/linke.png";

const FFooter = styled.footer`
  width: 100%;
  height: 200px;
  background-color: var(--color-bg3);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .infor-redes {
    flex-direction: column;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h2{
      color: var(--color-bg2);
      font-size: 18px;
      margin-bottom: 20px;
      font-weight: 400;
      font-family: var(--font-roboto);
    }

  }
  ul{
    display: flex;
    gap: 15px;
  }
  a{
    
  }
  img{
    width: 45px;
    height: 45px;
  }

  .links{

    width: 50%;
    height: 100%;
    
  }

  
`;

const Footer = () => {
  return (
    <FFooter>
      <div className="infor-redes">
        <h2>Entre em contato conosco</h2>
        <ul>
          <a href="https://www.instagram.com/julionunesyt" target="_blank">
          <img src={insta}  alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/julionunesdev/"  target="_blank">
          <img src={linke}   alt="LinkedIn" />
          </a>
          <a href="https://github.com/JulioNunesDev"  target="_blank">
          <img src={git}  alt="GitHub" />
          </a>
        </ul>
      </div>
      
    </FFooter>
  );
};

export default Footer;
