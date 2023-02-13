import { NavLink } from "react-router-dom"


function UserHeader ({login}){



return(
    <div>
        UserHeader

        <NavLink to ={`/profile/${login}`} >
            <button>Profile</button>
        </NavLink>

        <NavLink to ={`/userHome/${login}`} >
            <button>Home</button>
        </NavLink>
    </div>
)
}


export default UserHeader