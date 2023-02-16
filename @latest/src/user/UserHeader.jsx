import { NavLink, useHistory } from "react-router-dom"



function UserHeader ({login, clearLoginInfo, cart}){
    const history = useHistory()

function signOut(){
    if(confirm("Are you sure you want to sign out?")===true){clearLoginInfo()
    history.push('/')
    }
}

return(
    <div>
        
        <button className="btn" onClick={signOut}>Sign Out</button>


        <NavLink to ={`/profile/${login}`}>
            <button className="btn" >Profile</button>
        </NavLink>

        <NavLink to ={`/userHome/${login}`} >
            <button className="btn" >Home</button>
        </NavLink>

        
        {<NavLink to ={`/table/${login}`}>
            <button className="btn" >cart</button>
        </NavLink>}
        
    </div>

  
)
}


export default UserHeader