import React, { useState } from 'react';
import boardBackground from "../../Assets/boardBackground.jpg";
import logo from "../../Assets/checkers.png";
import  PlayButton from "../MenuPage/playButton"
import CardModal from './menuCard';
export default function MenuPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative h-screen w-screen">
      <img
        src={boardBackground}
        className="absolute top-0 left-0 h-full w-full object-cover object-center z-0"
        alt="Background"
        loading="lazy"
      />
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src={logo}
          className="h-73 w-73"
          alt="Logo"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10 mt-96">
        <PlayButton onClick={openModal} />
      </div>
      <CardModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
