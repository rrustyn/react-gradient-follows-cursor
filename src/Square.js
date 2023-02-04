import "./Square.css";

function Square({color}) {
  return (
    <div 
        className="square"
        style={{backgroundColor: color}}        
    />
  )
}

export default Square;