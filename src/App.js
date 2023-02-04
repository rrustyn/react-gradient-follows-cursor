import React, {useState, useEffect} from 'react';
import './App.css';
import GradientSquare from './GradientSquare';

function App() {

  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className="App">
      <GradientSquare 
        mouseX={mousePos.x}
        mouseY={mousePos.y}
      />
    </div>
  );
}

export default App;

