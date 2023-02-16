import { wrap } from "framer-motion";



function RenderSquareTable({squareTable}){

const y = Math.floor((squareTable.grid_number/67)*2);
const x = squareTable.grid_number%67*2;


return(
    <div>
    <div
        style={{
            position: "absolute",

            marginTop: `${y}em `,
            left: `${x}em`,
            height: '2em',
            width: "2em",
            border: "solid 1px",
            float: "left",
            flexWrap: wrap,
            backgroundColor: "red",
            center: Text,
            
            
        }}
        // onClick={removeTable}
        className='pointer'
        >
            <p>{squareTable.section}</p>
            <p>{squareTable.table_number}</p>
            {/* <p>{next}</p> */}
        </div>
    </div>
)
}


export default RenderSquareTable