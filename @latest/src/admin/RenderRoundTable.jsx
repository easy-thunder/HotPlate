import { wrap } from "framer-motion"





function RenderRoundTable({roundTable}){

    // function removeTable(){
    //    if (confirm('Are you sure you want to delete this table')===true){
    //     deleteTable()
    //    }
    // }


    const y = Math.floor((roundTable.grid_number/67)*2)
    const x = roundTable.grid_number%67*2;

    return(
        
        <div>
        <div
        style={{
            position: "absolute",

            marginTop: `${y}em `,
            // top: `${y}px`,
            // paddingLeft: `${x}px`,
            left: `${x}em`,
            height: roundTable.radius*2+"em",
            width: roundTable.radius*2+"em",
            border: "solid 1px",
            borderRadius: "100%",
            float: "left",
            flexWrap: wrap,
            backgroundColor: "yellow",
            center: Text,
            // zIndex: "7",
            
            
        }}
        // onClick={removeTable}
        className='pointer'
        >
            <p>{roundTable.section}</p>
            <p>{roundTable.table_number}</p>
        </div>
            </div>
    )
}

export default RenderRoundTable