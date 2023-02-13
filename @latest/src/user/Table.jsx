
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";


function Table({cart, clearCart, login}){

    const history = useHistory()
    function handleCheckout(){
  alert('Order purchased')
        clearCart()
        history.push(`/userHome/${login}`)
    }
    const pricesInCart = cart.map(price=>price.price) 

    function calculatePriceTotal(){
        const initialValue = 0;
        const PriceTotal = pricesInCart.reduce(
            (accumulator, currentValue) => accumulator + currentValue, initialValue
        )
        return(PriceTotal)
    }
    const priceTotal = calculatePriceTotal()

   
    return(
        <div>   
        {
       cart.map (item => 
    <CartItem  
    key = {item.id}
    item={item}
    />
        ) 
        }
    {cart ? <h3>{priceTotal}</h3> : <h3>0</h3>}
    {<button onClick={handleCheckout}>CheckOut</button>}

        </div>
    )
}


export default Table