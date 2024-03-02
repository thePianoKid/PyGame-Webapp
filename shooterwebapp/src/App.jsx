import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameButton from './GameButton'
import rightButtonImg from './assets/right_button.png';

function App() {
  const handleButtonClick = () => {
    alert('Button Clicked!');
  };


  

  return (
    <div className="App">
      <GameButton
        gameName="Co-Shooter"
        onButtonClick={handleButtonClick}
        imagePath={rightButtonImg} // Replace with your image path
      />
    </div>
    
  )
}

export default App
