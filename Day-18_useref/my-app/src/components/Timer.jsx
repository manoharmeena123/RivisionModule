import { useState,useRef,useEffect } from "react";

function fixTimeString(num){
    return num < 9 ? `0${num}` : `${num}`;
}
const formatTime = (timeInSec)=>{
const second = timeInSec % 60 ;
const minutes = Math.floor(timeInSec/60)%60;
const hours = Math.floor(timeInSec/3600);
return `${fixTimeString(hours)}:${fixTimeString(minutes)}:${fixTimeString(second)}`;
}


function Timer(){
    const [count,setCount] = useState(3601)
   const intervalRef = useRef(null)
    useEffect(()=>{
        const cleanup =()=>{
            stopTimer()
            // clearInterval(intervalRef.current)
        };
        return cleanup
    },[])


    const startTimer =()=>{
        if(intervalRef.current!= null){
        return;
    }

       intervalRef.current = setInterval(()=>{
        console.log(`interval`, Date.now())
        setCount((pre)=>{
                if(pre<=1){
                    clearInterval(intervalRef.current)
                }
                return pre-1;
            })
        },1000)
    }
    const stopTimer =()=>{
        console.log(`interval stop`, Date.now())
        clearInterval(intervalRef.current)
        intervalRef.current = null;
    }

    const resetTimer =()=>{
        console.log(`reset`, Date.now())
        setCount(3601)
        stopTimer()
    }
    return (
        <div>
            <h1>{formatTime(count)}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}
export default Timer