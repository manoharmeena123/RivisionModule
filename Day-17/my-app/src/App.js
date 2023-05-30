import './App.css';
import Timer from './components/Timer';
import { useState } from 'react';

function App() {
  const [showTimer, setShowTimer]= useState(true);
  return (
    <div className="App">
      {/* {showTimer&&<Timer/>}
      <button onClick={()=> setShowTimer(!showTimer)}>
      {showTimer?'Hide Timer':'Show Timer'}
      </button> */}
      <Timer/>
    </div>
  );
}

export default App;
