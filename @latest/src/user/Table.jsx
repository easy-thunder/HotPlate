
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


function Table({cart, clearCart, login, userInfo}){
    let myuuid = uuidv4()

    const history = useHistory()
    function handleCheckout(e){

        // itemArray=[]
        // cart.map(item=>{
        //     itemArray.push(item)
        // })
        e.preventDefault()
        const newVisit ={
            user_id: userInfo.id,
            menu_item_id: cart[0].id,
            // menu_items: itemArray,
            price_total: priceTotal,
            table_number: e.target.seatNumber.value,
            uuid: myuuid
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

        .then(alert('Order purchased redirecting too your home page'))
        
        .then(cart.map(item => 
            fetch(`http://localhost:9292/visits/${myuuid}`,{
                method: "PATCH",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(item)
            })))
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