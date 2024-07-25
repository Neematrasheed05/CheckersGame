
import React from 'react';
import blackPiece from '../../Assets/blackPiece.png'; 
import whitePiece from '../../Assets/whitePiece.png';

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
          className={`flex justify-center items-center w-16 h-16 ${isBlack ? 'bg-gray-700' : 'bg-gray-200'}`}
        >
          {piece}
        </div>
      );
    }
    board.push(<div key={row} className="flex">{boardRow}</div>);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-128 h-128">{board}</div>
    </div>
  );
};

export default CheckersBoard;
