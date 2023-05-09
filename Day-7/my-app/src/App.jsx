import './App.css';
import CartItem from "./components/CartItem"
import Total from "./components/Total"
import {useState} from "react";

const cartItem = [
  
{id:1, label :"Noodle", price:530, quantity : 1},
{id:2, label :"Maggi", price: 330, quantity : 1},
{id:3, label :"Dosa", price: 730, quantity : 1}

]

function CartContainer() {
  const [cart, setCart] = useState(cartItem) ;

const  changeQuantity =(id,val) =>{
  let updateCart = cart.map((item)=>(
 item.id === id ? 
 {...item , quanity : item.quantity +val}
  : item 
  ))
  setCart(updateCart)
}
const totalPrice = cart.reduce( (acc, curr)=> acc+ curr.price * curr.quantity, 0)

  return (
    <div className="App">
      {cart.map((item) =>(
        <CartItem key= {item.id} {...item}  changeQuantity = {changeQuantity}/>
      ))}
      <Total  cart={totalPrice}/>
    </div>
  );
}

export default CartContainer;
