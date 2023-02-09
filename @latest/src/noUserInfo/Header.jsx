import { NavLink } from "react-router-dom"




function Header (){
    return(
        <div> 

<button>sign in</button>

<NavLink to = '/sign_up' exact>
<button>sign up</button>
</NavLink>

<NavLink to= '/' exact>
<button>home</button>
</NavLink>

<NavLink to= '/all_menu' exact>
<button>all menu</button>
</NavLink>



        </div>
    )
}

export default Header
