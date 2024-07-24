import React from 'react';
import board from "../Assets/board.jpeg"
import Card from './HomePage/card';

const HomePage = () => {
  return (
    <div className="relative overflow-hidden h-screen">
        <img
          src={board}
          className="absolute top-0 left-0 h-full w-full object-cover object-center"
          alt="Student"
          loading="lazy"
        />
       <Card/>
      </div>
  );
};

export default HomePage;
