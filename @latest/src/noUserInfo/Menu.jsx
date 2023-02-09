




function Menu({menuItem}){
    console.log("hi")
    console.log(menuItem.name)
    return(
    <div className="border">
        <h3> {menuItem.name}</h3>
        <h3> {menuItem.description} </h3>
        <h3>{menuItem.price}</h3>
        <button>add too order</button>
    </ div>)
}

export default Menu