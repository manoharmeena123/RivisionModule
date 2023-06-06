import {useRef} from 'react';
function InputBoxes(){
let indexref = useRef([])
   
console.log(indexref)
    return (
        <div>
          
            <input 
            style = {{width:"20px"}}
            id="1"

            ref ={(elem)=>{
            indexref.current[0] = elem;
            }}/>
             <input 
            style = {{width:"20px"}}
            id="2"

            ref ={(elem)=>{
            indexref.current[1] = elem;
            }}/>
             <input 
            style = {{width:"20px"}}
            id="3"

            ref ={(elem)=>{
            indexref.current[2] = elem;
            }}/>
             <input 
            style = {{width:"20px"}}
            id="4"
            ref ={(elem)=>{
            indexref.current[3] = elem;
            }}/>
          
         
            </div>
    );
}

export default InputBoxes