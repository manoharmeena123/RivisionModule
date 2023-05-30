import { useEffect } from "react";
import { useState } from "react";


function Timer(){
    const [count,setCount]= useState(10)

    // useEffect(()=>{
    //  const timer = setInterval(()=>{
    //     console.log(`interval running`,Date.now())
    //     setCount((pre)=>{
    //         if(pre===1){
    //             clearInterval(timer)
    //             console.log(`count is 0, interval stops`)
    //         }
    //         return pre-1
    //     })
    //      },1000)
    //   const cleanUp =()=>{
    //     console.log("Cleanup called")
    //         clearInterval(timer)
    //     }
    //     return cleanUp
    
    // },[])


    ///example -2
   useEffect(()=>{
    console.log("callback inside useEffect ran", Date.now())
    return ()=>{
        console.log("cleanup function called", Date.now())
    }
   })
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>INC</button>
        </div>
    )
}
export default Timer;