
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";


function Table({cart, clearCart, login, userInfo}){


    const history = useHistory()
    function handleCheckout(){
        const newVisit ={
            user_id: userInfo.id,
            menu_item_id: cart[0].id,
            price_total: priceTotal
        }


        cart.map(item =>
            fetch(`http://localhost:9292/users/${userInfo.id}/orders`,{
                method: "PATCH",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(item)
            })
            )

        fetch(`http://localhost:9292/visits`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newVisit)
        })

        .then(alert('Order purchased'))
        .then(clearCart())
        .then(history.push(`/userHome/${login}`))
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