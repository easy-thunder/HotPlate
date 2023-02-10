import { NavLink, useHistory } from "react-router-dom"
import { useState } from "react"




function Header (){
    const [open, setOpen] = useState(false)
    const history = useHistory()

function validateUser(){


}


<dev>
    <h1>Test</h1>
</dev>


    return(
        <div> 
<span>
    
<button className = "" onClick = {()=> setOpen(open=>(!open))}>sign in</button>

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
