import { wrap } from "framer-motion"




function RoundTable({radius}){
    return(
        <div>
        <div
        style={{
            position: "relative",
            // top: "50%",
            // left: "50%",
            
            // margin: "-25px 0 0 -25px",
            // display: "flex",
            // alignItems: "center",
            
            // justifyContent: "center",
            // marginRight: "1000em",
            height: radius+"em",
            width: radius+"em",
            border: "solid 1px",
            borderRadius: "100%",
            float: "right",
            flexWrap: wrap,
            backgroundColor: "yellow",
            // zIndex: "7",
            
            
        }}
        >

        </div>
            </div>
    )
}

export default RoundTable