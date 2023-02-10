import { NavLink, useHistory } from "react-router-dom"
import { useState } from "react"
import { Button } from "@material-tailwind/react";




function Header (){
    const [open, setOpen] = useState(false)
    const history = useHistory()

function validateUser(){


}




    return(
<div> 
<span>

<div className="flex w-max gap-4">
<Button className = "" onClick = {()=> setOpen(open=>(!open))}>sign in</Button>
</div>

<NavLink to = '/sign_up' exact>
<button>sign up</button>
</NavLink>

<NavLink to= '/' exact>
<button>home</button>
</NavLink>

<NavLink to= '/all_menu' exact>
<button>all menu</button>
</NavLink>
</span>
<div>
    <form onSubmit={validateUser} className={`${open ? "block" : "hidden"}`}>
        <label>email</label>
        <input type='email' id = "sign_in_email" />
        <br />
        <label>password</label>
        <input type="password" id="sign_in_email" />
        <br />
        <input type='submit' />
    </form>
</div>



        </div>
    )
}

export default Header
