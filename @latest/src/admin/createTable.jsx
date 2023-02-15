import { NavLink, useHistory } from "react-router-dom"
import Grid from "./Grid"


function CreateTable (){
// const [circleOpen, setCircleOpen]=useState(false)

//     let table = false;
// function makeTable(){
//     if(table === false){
//         table = true
//     }
//     if(table === true){
//         table = false
//     }
// }


const grids = []
// let x = 0;
// while(x<=10){
//     grids.push(x)
//     x++;
// }
for(let i=0; i <= 4488; i++){
    grids.push(<Grid key={i}
    number={i+1}
    />)
}

console.log(grids)

    return (
        <div className> 
            <h3>PLEASE NOTE: you must add your round tables first. The round tables mutate the rest of the grid</h3>
            {/* <button onClick={()=>setCircleOpen(open=>(!open))}>Add circle</button> */}
            {/* {`${open ? "block" : "hidden"}` */}
            {/* <form className={`${circleOpen ? "block" : "hidden"}`} onSubmit={}>
                <label>circle radius</label>
                <input type='number' id="radius"/>
                <input type='submit' />
            </form> */}
            <br />
            <button>Add horizontal line</button>
            <br />
            <button>Add vertical line</button>
            <div className="console">
                {/* <div className="circle"></div> */}
            {/* <span className={`pointer ${table ? "square" : "grid"}`} onClick={()=>setTable(table => (!table))}></span> */}
            {/* <div style={{table ?  }}  className={`pointer ${table ? "square" : "grid"}`} onClick={makeTable}></div> */}
            {/* <div  className={`pointer ${table ? "square" : "grid"}`} onClick={()=>setTable(table => (!table))}></div> */}


            {grids}
            </div>
        </div>
    )
}

export default CreateTable