import React from 'react' ;

function FunctionEvent() {

  function Nefunc() {
    console.log("Clicked !");
    
  }
  return (
    <div>
    <button onClick = {Nefunc}>click me</button>
    </div>
  )
}

export default FunctionEvent ;