import { NavLink, useHistory } from "react-router-dom"
import { useState } from "react"
import "../App.css"
import {motion} from "framer-motion"
import{fadeIn,staggerContainer} from '../variants';
// import { MenuItem } from "@material-tailwind/react";




function Header ({handleLoginInfo}){
    const [open, setOpen] = useState(false)
    const history = useHistory()

//  function addToCart(e){

//    const addToCart = e.target.menu_items_id.value 
   
//    fetch(`http://localhost:9292/users/${menu_items_id}`,{
//    method:"PATCH",
//    headers:"Content-type: application/json",
//    body: JSON.stringify(addToCart)
//    })
//    .then(r=>r.json())
//    .then(console.log(addToCart))
// }


function validateUser(e){
    e.preventDefault()

    const email = e.target.sign_in_email.value
    const password = e.target.sign_in_password.value

    fetch(`http://localhost:9292/users/${email}/${password}`)
    
    .then(r=>r.json())
    // .then(user =>console.log(user.uuid))
    .then(user => {handleLoginInfo(user),
        history.push(`/userHome/:${user.uuid}`)
    })
    // .then(user => {
    //     console.log(user)
        
    // })
}


<dev>
    <h1>Test</h1>
</dev>


    return(
        
        <div> 
<motion.div  
variants={staggerContainer} 
initial="hidden" 
whileInView={'show'}
viewport={{ once:false, amount:0.1}}
className='.container .mx-auto flex items-center text-center'
>
    
<motion.button
variants={fadeIn('down','tween', 0.2, 1.6)}
className=" 
.container .mx-auto 
h2 capitalize text-white max-w-[400px]
navMargin py-2 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent
 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"onClick = {()=> setOpen(open=>(!open))}>sign in</motion.button>

<NavLink to = '/sign_up' exact>
<motion.button 
variants={fadeIn('down','tween', 0.2, 1.6)}
className="
.container .mx-auto
h2 capitalize text-white max-w-[400px] navMargin py-2 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white 
hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">sign up</motion.button>
</NavLink>

<NavLink to= '/' exact>
<motion.button 
variants={fadeIn('down','tween', 0.2, 1.6)}
className="
.container .mx-auto
h2 capitalize text-white max-w-[400px]
navMargin py-2 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white 
hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">home</motion.button>
</NavLink>

<NavLink to= '/all_menu' exact>

<motion.button
variants={fadeIn('down','tween', 0.2, 1.6)}
className="
.container .mx-auto
h2 capitalize text-white max-w-[400px]
navMargin py-2 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent 
transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">all menu</motion.button>
</NavLink>


</motion.div>
<div>
    <form 
    // className="w-full max-w-lg"  
    onSubmit={validateUser} className={`${open ? "block" : "hidden"}`}>
        <label className="block text-gray-700 text-sm font-bold mb-2" >Email</label>
        <input  
        className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type='email' id = "sign_in_email" />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2" >Password</label>
        <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password" id="sign_in_password" />

        <br />
        <input type='submit' />
    </form>
</div>



        </div>
    ) 
}

export default Header
