import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import music1 from '../../../song/cover.mp3';
import music2 from '../../../song/cove2.mp3';

import { useAudio } from "react-awesome-audio";

const animes = keyframes`

  0% {
    transform: scaleY(0.1);
    opacity: 0;
  }

  50% {
    transform: scaleY(1);
    background: yellowgreen;
  }

  100% {
    transform: scaleY(0.1);
    background: transparent;
    opacity: 1;
  }



`;

const Div = styled.div`
  /* From uiverse.io by @fanishah */
  .loader {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .bar {
    z-index: 10;
    cursor: pointer;
    width: 5px;
    height: 20px;
    background: ${(props) => props.back};
    display: inline-block;
    transform-origin: bottom center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    animation: ${(props) => props.load} 1.2s linear infinite;
  }

  .bar1 {
    animation-delay: 0.1s;
  }

  .bar2 {
    animation-delay: 0.2s;
  }

  .bar3 {
    animation-delay: 0.3s;
  }

  .bar4 {
    animation-delay: 0.4s;
  }

  .bar5 {
    animation-delay: 0.5s;
  }

  .bar6 {
    animation-delay: 0.6s;
  }

  .bar7 {
    animation-delay: 0.7s;
  }

  .bar8 {
    animation-delay: 0.8s;
  }
`;

const Player = () => {
  const [playe, setPlaye] = useState(false);

  const [music, setMusic] = useState({musica: `${music1}`,musica1: `${music2}` });

  const { isPlaying, play, pause, toggle } = useAudio({
    src: music1,
    loop: true,
    volume: 0
  });



  function player() {
    
    if(!isPlaying){
        play()
        setPlaye(true);
    }else{
        pause()
        setPlaye(false);

    }
  }
    
   

  return (
    <Div
      class="loader"
      back={playe ? null : "black"}
      load={playe ? animes : null}
      onClick={player}
    >
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
      <div class="bar bar8"></div>

       
     
    </Div>
  );
};

export default Player;
