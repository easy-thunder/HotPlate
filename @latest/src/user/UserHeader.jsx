import { NavLink, useHistory } from "react-router-dom"



function UserHeader ({login, clearLoginInfo}){
    const history = useHistory()

function signOut(){
    if(confirm("Are you sure you want to sign out?")===true){clearLoginInfo()
    history.push('/')
    }
}

return(
    <div>
        
        <button onClick={signOut}>Sign Out</button>
        <NavLink to ={`/profile/${login}`}>
            <button>Profile</button>
        </NavLink>

        <NavLink to ={`/userHome/${login}`} >
            <button>Home</button>
        </NavLink>
    </div>
)
}


export default UserHeader