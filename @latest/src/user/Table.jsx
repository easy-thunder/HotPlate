
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


function Table({cart, clearCart, login, userInfo}){
    
    const history = useHistory()
    function handleCheckout(e){
        e.preventDefault()
       const newCart = cart.map(cart => cart.name).join()
        let myuuid = uuidv4()
        console.log(newCart)
    const newVisit = {
        user_id: userInfo.id,
        price_total: priceTotal,
        table_number: e.target.seatNumber.value,
        uuid: myuuid,
        items: newCart
    }


        fetch('http://localhost:9292/visits',
        {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newVisit)
        }
        )
        .then(clearCart())
        .then(alert('Your order is coming to you. Redirecting too home page'))
        .then(history.push(`/userHome/${userInfo.uuid}`))
       
        
    
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
    {cart ? <h3>${priceTotal}.00</h3> : <h3>0</h3>}
    <form onSubmit={handleCheckout}>
        <label>input seat number</label>
        <input type='number' id="seatNumber" />
        <br />
        <input type='submit' />
    </form>
    {/* {<button onClick={handleCheckout}>CheckOut</button>} */}
        </div>
    )
}


export default Table