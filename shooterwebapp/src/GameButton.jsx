// src/GameButton.jsx
import React from 'react';

const GameButton = ({ gameName, onButtonClick, imagePath }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-20 ">{gameName}</h1>
      <button onClick={onButtonClick} className="focus:outline-none">
        <img src={imagePath} alt="Click Me" className="w-40 h-100 object-cover" />
      </button>
    </div>
  );
};

export default GameButton;
