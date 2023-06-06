import {useState} from "react"

const ButtonWithUseState =()=>{
    const [count, setCount] = useState(0);
  
    const handl =()=>{
      setCount(count+1)
      console.log(count)
    }
  console.log("re-render")
    return (
      <div>
   <h1>Count :{count}</h1>
   <button onClick={handl}>UseSate Click</button>
      </div>
    );
  }
export default ButtonWithUseState 