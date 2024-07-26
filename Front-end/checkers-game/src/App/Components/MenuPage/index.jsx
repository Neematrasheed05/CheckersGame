import React from 'react'
import boardBackground from "../../Assets/boardBackground.jpg"
import logo from "../../Assets/checkers.png"
import PlayButton from './playButton'

export default function MenuPage() {
  return (
    <div className="relative h-screen w-screen">
      <img
        src={boardBackground}
        className="absolute top-0 left-0 h-full w-full object-cover object-center z-0"
        alt="Background"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10" style={{ top: '-10%' }}>
        <img
          src={logo}
          className="h-48 w-48" // Adjust the size as needed
          alt="Logo"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10 mt-80">
      <PlayButton/>
      </div>
    </div>
  )
}
