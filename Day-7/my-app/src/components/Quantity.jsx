
import Button  from "./Button"
import {useState} from "react"

function Quantity({quantity,id ,changeQuantity}){

  const [quant, setQuant] = useState(0)  





return (
    <>
  
    <Button text ="-" onClick =  {()=>changeQuantity(id, -1)}  />
      <p>{quantity}</p>
    <Button text ="+" onClick =  {
        ()=>changeQuantity(id, +1)} />
    </>
)

}
export default Quantity;