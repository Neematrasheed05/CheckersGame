import React from 'react';
import './Button.css'; // Import the CSS file for custom animations

const Button = () => {
  return (
    <button className="btn relative flex justify-center items-center w-52 h-12 overflow-hidden backdrop-blur-lg rounded-full transition duration-500">
      <strong className="relative z-20 font-['Press Start 2P'] text-sm tracking-widest text-white drop-shadow-[0_0_4px_white]">
        Get Started !
      </strong>
      <div id="container-stars" className="absolute inset-0 z-[-1] w-full h-full overflow-hidden transition duration-500 backdrop-blur-lg rounded-full">
        <div id="stars" className="relative w-[200rem] h-[200rem] bg-transparent"></div>
      </div>
      <div id="glow" className="absolute flex w-48">
        <div className="circle w-full h-7 bg-[rgba(254,83,186,0.636)] blur-2xl animate-pulse_3011 z-[-1]"></div>
        <div className="circle w-full h-7 bg-[rgba(142,81,234,0.704)] blur-2xl animate-pulse_3011 z-[-1]"></div>
      </div>
    </button>
  );
};

export default Button;
