import React from 'react';
import Button from './button';
import './Card.css'; // Import the CSS file for custom animations



const Card = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
    <div className="w-80 h-88 p-5 text-white bg-gradient-to-r from-gray-900 to-gray-900 border-2 border-transparent rounded-md flex flex-col cursor-pointer transform origin-bottom-right transition-all duration-600 ease-in-out hover:rotate-8 hover:border-gradient-to-r hover:border-transparent hover:from-purple-500 hover:to-blue-500">
        <div className="flex-1">
          
          <p className="text-2xl my-6 font-semibold game-font animate-game-on">
            Game On!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Card;
