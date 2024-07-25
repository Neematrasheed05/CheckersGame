import React, { useRef } from 'react';
import Button from './button';
import './Card.css'; // Import the CSS file for custom animations
import buttonSound from "../../Assets/buttonClick.mp3"
import { useNavigate } from "react-router-dom";

const Card = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();



  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }
    navigate('/register'); // Change to your desired route

  };

  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-1/2 h-88 p-5 text-black bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-md flex flex-col cursor-pointer transform origin-bottom-right transition-all duration-600 ease-in-out hover:rotate-8 hover:border-transparent hover:bg-opacity-50">
        <div className="flex-1">
          <p className="text-2xl my-6 font-semibold game-font animate-game-on">
          Checkers is a classic board game that comes to life online. You can play checkers versus the computer or with a friend whenever you want! Play today immediately on all of your devices using your favorite internet browser          </p>
        </div>
        <div className="flex items-center justify-center">
        <Button onClick={playSound}/>
        </div>
        <audio ref={audioRef} src={buttonSound} />
      </div>
    </div>
  );
};

export default Card;
