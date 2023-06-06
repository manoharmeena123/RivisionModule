import {useRef} from "react";
//  import {useState} from "react"


const ButtonWithUseRef =()=>{
    let ref = useRef(0);
    
    
     const handle =()=>{
       ref.current = ref.current+1;
       console.log(ref.current)
     }
   console.log("re-render")
     return (
       <div>
    <h1>Count :{ref.current}</h1>
    <button onClick={handle}> UseRef Click</button>
       </div>
     );
   }
   export default ButtonWithUseRef