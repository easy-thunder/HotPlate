import { NavLink } from "react-router-dom"


function UserHeader ({login}){
return(
    <div>
        UserHeader
        <NavLink to ={`/userHome/${login}`} >
            <button>home</button>
        </NavLink>
    </div>
)
}


export default UserHeader