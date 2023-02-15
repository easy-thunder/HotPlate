import { NavLink } from "react-router-dom"
import Grid from "./Grid"


function CreateTable (){
const grids = []
for(let i=0; i <= 4488; i++){
    grids.push(<Grid key={i}
    number={i+1}
    />)
}
    return (
        <div className> 
        <NavLink to='/AdminHome/jqw9repj493j984334uidsjp9934/ViewVisits'>
    <button> View Visits </button>
</NavLink>

<br></br>
        <NavLink to='/AdminHome/jqw9repj493j984334uidsjp9934/createTable'exact>
        <button>Create New Table</button>
        </NavLink> 
        <br></br>
        <NavLink to= '/AdminHome/jqw9repj493j984334uidsjp9934'exact>
        <button>Create New Dish</button>
        </NavLink>
            <h3>PLEASE NOTE: YOU MUST add your round tables first. The round tables mutate the rest of the grid</h3>
            <h4>ADDITIONAL INSTRUCTIONS: Right click on the grid too add a chair or a table. You can not click multiple different check boxes. Every chair needs a chair number so that the server knows which person the food goes too. In the table section and number you only need to add the section and table number too one block on the square table so the server can reference what table the food goes too.</h4>
            <div className="console">
            {grids}
            </div>
        </div>
    )
}

export default CreateTable