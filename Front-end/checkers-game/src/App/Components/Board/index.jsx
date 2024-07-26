// src/CheckersBoard.js

import React from 'react';
import blackPiece from '../../Assets/blackPiece.png'; 
import whitePiece from '../../Assets/whitePiece.png';
import boardBackground from "../../Assets/boardBackground.jpg"

const CheckersBoard = () => {
  const board = [];
  const rows = 8;
  const cols = 8;

  for (let row = 0; row < rows; row++) {
    const boardRow = [];
    for (let col = 0; col < cols; col++) {
      const isBlack = (row + col) % 2 === 1;
      let piece = null;

      if (row < 3 && isBlack) {
        piece = <img src={blackPiece} alt="Black Piece" className="w-16 h-16" />;
      } else if (row > 4 && isBlack) {
        piece = <img src={whitePiece} alt="White Piece" className="w-16 h-16" />;
      }

      boardRow.push(
        <div
          key={`${row}-${col}`}
          className={`flex justify-center items-center w-16 h-16 ${isBlack ? 'bg-brown-800' : 'bg-brown-400'}`}
        >
          {piece}
        </div>
      );
    }
    board.push(<div key={row} className="flex">{boardRow}</div>);
  }

  return (
    <div className="relative h-screen w-screen">
      <img
        src={boardBackground}
        className="absolute top-0 left-0 h-full w-full object-cover object-center z-0"
        alt="Background"
        loading="lazy"
      />
      <div className="flex justify-center items-center h-full relative z-10">
        <div className="flex flex-col">{board}</div>
      </div>
    </div>
  );
};

export default CheckersBoard;
