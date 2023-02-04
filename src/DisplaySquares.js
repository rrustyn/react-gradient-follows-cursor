import React, { useState } from "react";
import "./DisplaySquares.css";
import GradientSquare from "./GradientSquare";

function DisplaySquares({ amountBoxes, mx, my }) {
  const [boxes, setBoxes] = useState(getInitialBoxes);

  function getInitialBoxes() {
    return Array.from({ length: amountBoxes }, () => "black");
  }

  const boxComponents = boxes.map((color, i) => (
    <GradientSquare
      key={i}
      mouseX={mx}
      mouseY={my}
      orgx={50*(i+1)}
      orgy={50*Math.floor(((i+1)/10))}
    />));
  
  return (
    <div className="square-container">
      {boxComponents}
    </div>
  );

}

// function choice(array) {
//   let random = Math.floor(Math.random() * array.length);
//   return array[random];
// }

export default DisplaySquares;