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
    const admin = e.target.admin.checked
    if (admin === false){
    fetch(`http://localhost:9292/users/${email}/${password}`)
    
    .then(r=>r.json())
    .then(user => {handleLoginInfo(user),
        history.push(`/userHome/:${user.uuid}`)
    })
}
/////////////////////////////////////////////////
// This fetch request is built out for you. I want you to look at the other application controllers, see how they verified the users and do the same with admin. You will have to build an admin table first to verify anything. You can make the admin password and email whatever you want in seed data. The only two things needed in the admin is their email and password for validation.
/////////////////////////////////////////////////////
// if (admin === true){
//     fetch(`http://localhost:9292/admin/${email}/${password}`)
//     .then(r=>r.json())
//     .then(history.push(`/AdminHome/jqw9repj493j984334uidsjp9934`))
// }




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
className="btn glass Itemwidth HeaderCenter  "onClick = {()=> setOpen(open=>(!open))}>sign in</motion.button>

<NavLink to = '/sign_up' exact>
<motion.button 
variants={fadeIn('down','tween', 0.2, 1.6)}
className="btn glass Itemwidth HeaderCenter"
>sign up</motion.button>
</NavLink>


<NavLink to= '/' exact>
<motion.button 
variants={fadeIn('down','tween', 0.2, 1.6)}
className="btn glass Itemwidth HeaderCenter"
>home</motion.button>
</NavLink>

<NavLink to= '/all_menu' exact>

<motion.button
variants={fadeIn('down','tween', 0.2, 1.6)}
className="btn glass Itemwidth HeaderCenter" >all menu</motion.button>
</NavLink>


</motion.div>
<div>
    <form 
    // className="w-full max-w-lg"  
    onSubmit={validateUser} className={`${open ? "block" : "hidden"}`}>
        <div> 
        <label className="label"> 
        <span className="label-text text-black"> Your Email </span>
        </label>
        <label className="input-group">
        <span>Email</span>
        <input className="input input-bordered w-full max-w-xs" type='email' id = "sign_in_email" />
        </label>
        </div>

        <br />
        <div> 
        <label className="label"> 
        <span className="label-text text-black passwordtext"> Your Password </span>
        </label>
        <label className="input-group passwordtext ">
        <span>Password</span>
        <input className="input input-bordered w-full max-w-xs " type='password' id = "sign_in_password"/>
        </label>
        </div>  
        <br />



        <label>Are you an administrator?</label>
        <input type="checkbox" id="admin"/>
        <br />
        <input type='submit' />
    </form>
</div>



        </div>
    ) 
}

export default Header
