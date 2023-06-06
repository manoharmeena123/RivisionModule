
import {useRef} from 'react';
function InputBox(){
let ref = useRef(null)
    const FocusOnInput =()=>{
    //  document.getElementById('input').focus();
    ref.current.focus()
    }

    return (
        <div>
            <br/>
          <br/>
            <input ref ={ref}/>
            <br/>
          <br/>
          <butoon onClick={FocusOnInput}>InputButton</butoon>
            </div>
    )
}

export default InputBox;