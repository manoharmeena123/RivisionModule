import './App.css';
import { useState } from 'react';
import Posts from './components/Post';
function App() {
  const [amount, setAmount] = useState(0);
const handleClick = () =>{


setAmount((preAmount) => preAmount+100)
setAmount(amount+500)
  }

  const handle = () =>{
   setAmount((preAmount) => preAmount-100)
      }
  return (
    <div className="App">
     <h1>Current Balance :{amount}</h1>
     <button onClick={handleClick}>Deposit 100</button>
     <button onClick={handle}>Withdraw 100</button>
     <br></br>
     <hr></hr>
     <Posts/>
    </div>
  );
}

export default App;
