import {useRef} from "react";

function SampleComponents(){
    let ref = useRef(1);
const handleClick =()=>{
  ref.current=   ref.current+1
  console.log(ref)
};
console.log("Re-render")
    return( <div>
        <butoon onClick ={handleClick}>Click</butoon>
    </div>);
}

export default SampleComponents;