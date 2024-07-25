import React, { useRef, useEffect } from 'react';
import board from "../../Assets/checkers.jpg";
import Card from './card';
import introsound from "../../Assets/gameStart.mp3";

const HomePage = () => {
  const introAudioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (introAudioRef.current) {
        introAudioRef.current.play().catch(error => {
          console.error('Error playing intro audio:', error);
          // If the audio play is blocked, wait for user interaction
          window.addEventListener('click', handleUserInteraction, { once: true });
          window.addEventListener('touchstart', handleUserInteraction, { once: true });
        });
      }
    };

    const handleUserInteraction = () => {
      if (introAudioRef.current) {
        introAudioRef.current.play().catch(error => {
          console.error('Error playing intro audio on user interaction:', error);
        });
      }
    };

    // Attempt to play audio on component mount
    playAudio();

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      <img
        src={board}
        className="absolute top-0 left-0 h-full w-full object-cover object-center"
        alt="Student"
        loading="lazy"
      />
      <Card />
      <audio ref={introAudioRef} src={introsound} />
    </div>
  );
};

export default HomePage;
