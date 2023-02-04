import React, { useState, useEffect } from 'react';

function GradientSquare({ mouseX, mouseY }) {
  const [angle, setAngle] = useState(0);

  console.log(`mousex: ${mouseX}, mousey:${mouseY}, angle:${angle}`);
  useEffect(() => {
    // calculate the angle between the center of the square and the mouse position
    const x = (mouseX + 500) % 1000;
    const y = (mouseY + 500) % 1000;
    const angle = Math.atan2(y, x) * 180 / Math.PI;

    setAngle(angle);
  }, [mouseX, mouseY]);

  const redAngle = (angle + 120) % 360;
  const blueAngle = (angle + 240) % 360;

  return (
    <div
      style={{
        width: "1000px",
        height: "1000px",
        cursor: "none",
        background:
          `radial-gradient(circle at ${mouseX}px ${mouseY}px, white, 25%, transparent),
           linear-gradient(${redAngle}deg, rgb(255,0,0), 45%, transparent), 
           linear-gradient(${angle}deg, rgb(0,255,0), 45%, transparent), 
           linear-gradient(${blueAngle}deg, rgb(0,0,255), 45%, transparent)`
      }}
    />
  );
}

export default GradientSquare;