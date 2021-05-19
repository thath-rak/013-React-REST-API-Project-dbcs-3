import React, { useState, useRef } from 'react';
import './App.css';



function App() {
  const [results, setResults] = useState("")
  const speed = useRef(null)

  const handleReset = () => {
    setResults("")
  }

  const handleCheckResults = () => {
    if(speed.current.value < 299792458) {
      setResults("You are not faster than a spaceship.")
    } else {
      setResults("Stop lying. You cannot travel faster than the speed of light.")
    }
  }


  return (
    <main>
      <section>
        <h1> ARE YOU FASTER THAN A STAR WARS SPACESHIP? </h1>
        <c2> NO. PROBABLY NOT. </c2>
      </section>
      <div>
        <p>{results}</p>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <label>INPUT SECTION: THIS IS WHERE YOU TYPE IN YOUR SPEED. </label>
        <button className="search" onClick={handleCheckResults}> SEARCH </button>
        <input ref={speed} type="text" placeholder="YOUR SPEED" />
      </div>
     
      <div1>
      
      </div1>


    </main>
  );
}
export default App;


