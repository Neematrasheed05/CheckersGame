import React, { useRef } from 'react';
import './PlayButton.css';
import buttonSound from "../../Assets/buttonClick.mp3";

const PlayButton = ({ onClick }) => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }
    onClick(); // Trigger the onClick function to open the modal
  };

  return (
    <>
      <button 
        className="relative w-44 h-16 outline-none transition duration-100 bg-transparent border-none text-[13px] font-bold text-[#000000] group" 
        onClick={playSound}
      >
        P L A Y N O W !
        <div
          id="clip"
          className="absolute top-0 overflow-hidden w-full h-full border-double border-[5px] border-[#000000] box-shadow-[inset 0px 0px 15px #195480]"
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
        >
          <div
            id="leftTop"
            className="corner"
            style={{ top: '-1.96em', left: '-3.0em' }}
          ></div>
          <div
            id="rightBottom"
            className="corner"
            style={{ top: '45%', left: '88%' }}
          ></div>
          <div
            id="rightTop"
            className="corner"
            style={{ top: '-1.98em', left: '91%' }}
          ></div>
          <div
            id="leftBottom"
            className="corner"
            style={{ top: '2.10em', left: '-2.15em' }}
          ></div>
        </div>
        <span
          id="rightArrow"
          className="arrow"
          style={{ left: '102%', clipPath: 'polygon(100% 49%, 0 0, 0 100%)' }}
        ></span>
        <span
          id="leftArrow"
          className="arrow"
          style={{ left: '-13.5%', clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }}
        ></span>
      </button>
      <audio ref={audioRef} src={buttonSound} />
    </>
  );
};

export default PlayButton;
