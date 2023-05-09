
import LabelPrice from "./LabelPrice"
import Quantity from "./Quantity"

function CartItem({id, label, price, quantity ,changeQuantity}){
return (
    <div style ={{ display: "flex", alignItems:"center", justifyContent: "space-around" ,
    border :"1px solid black",
    margin :"10px"}}>
<LabelPrice label={label} price = {price}/>
<Quantity quanity ={quantity} id ={id} changeQuantity = {changeQuantity} />
    </div>
)
}

export default CartItem;