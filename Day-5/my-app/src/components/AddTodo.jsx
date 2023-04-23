
import { useState } from "react"
function AddTodo({handleTodo}){
 const [inputVal,setInputVal]= useState("")
 
    function handleClick (){
        handleTodo(inputVal) 
        setInputVal("")
    }
 
return (
    <div>
        {/* add todo */}
        <input placeholder="ADD TODO" value={inputVal} onChange={(e)=> setInputVal(e.target.value)}/>
        <button onClick={handleClick}>ADD TODO</button>
   
      </div>
)

}

export default AddTodo