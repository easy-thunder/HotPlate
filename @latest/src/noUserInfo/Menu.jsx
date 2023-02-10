import React from "react"



function Menu({menuItem}){
    console.log("hi")
    console.log(menuItem.name)
    return(
    <div className="  ">
        <h3>{menuItem.name}</h3>

        <h3> {menuItem.description} </h3>

        <h3>{menuItem.price}</h3>

        <button  className='btn capitalize w-full lg:max-w-[240px] '>add too order</button>

    </ div>)
}

export default Menu