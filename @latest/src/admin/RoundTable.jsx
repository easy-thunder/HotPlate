import { wrap } from "framer-motion"
import ContextMenu from "react-jsx-context-menu"





function RoundTable({radius, number, text, deleteTable}){

    function removeTable(){
       if (confirm('Are you sure you want to delete this table')===true){
        deleteTable()
       }
    }


    const y = Math.floor((number/67)*2)
    const x = number%67*2;
    console.log(`${x}x`)
    console.log(`${y}y`)
    return(
        
        <div>
        <div
        style={{
            position: "absolute",

            marginTop: `${y}em `,
            // top: `${y}px`,
            // paddingLeft: `${x}px`,
            left: `${x}em`,
            height: radius*2+"em",
            width: radius*2+"em",
            border: "solid 1px",
            borderRadius: "100%",
            float: "left",
            flexWrap: wrap,
            backgroundColor: "yellow",
            center: Text,
            // zIndex: "7",
            
            
        }}
        onClick={removeTable}
        className='pointer'
        >
            <p>{number}</p>
            <p>{text}</p>
        </div>
            </div>
    )
}

export default RoundTable