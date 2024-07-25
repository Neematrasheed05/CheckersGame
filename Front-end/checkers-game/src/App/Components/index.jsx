import React, { useRef, useEffect,useState } from 'react';
import board from "../Assets/checkers.jpg";
import Card from './HomePage/card';
import introsound from "../Assets/gameStart.mp3";

const HomePage = () => {
  const introAudioRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setHasInteracted(true);
    if (hasInteracted && introAudioRef.current) {
      introAudioRef.current.play().catch(error => {
        console.error('Error playing intro audio:', error);
      });
    }
  }, [hasInteracted]);

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
