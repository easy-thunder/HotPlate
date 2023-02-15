import { useState } from "react"
import ContextMenu from "react-jsx-context-menu"
import RoundTable from "./RoundTable"





function Grid({number}){

    function deleteTable(){
        setGrid(()=>"grid")
        setRound(()=>false)
        setText(()=>'')
    }





    const [grid, setGrid] = useState('grid')
    const [text, setText] = useState('')
    const [round, setRound] = useState(false)
    const [radius, setRadius] = useState(2)

    function handleGrid(e){
        e.preventDefault()
        if(e.target.chair.checked === true
             ){
                setGrid(()=>'chair')
                setText(()=>e.target.chairNumber.value)
        }
        if(e.target.squareTable.checked === true){
            setGrid(()=>'square')
            setText(()=>e.target.tableSection.value + e.target.tableNumber.value)
        }

        if(e.target.roundTable.checked === true){
            setRound(()=>true)
            setRadius(()=>e.target.radius.value)
            setText(()=>e.target.tableSection.value + e.target.tableNumber)
        }
        if(e.target.grid.checked === true){
            setRound(()=>false)
            setGrid(()=>"grid")
            setText(()=>'')
        }
        // console.log(e.target.chair.checked)
        // console.log(e.target.chairNumber.value)
        console.log(number)

    }


    



    return (

    <ContextMenu
        menu={
            <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              zIndex: 25,
              border: `1px solid red`,
              backgroundColor: `blue`
              
            }}
          >
            {/* <button onClick={()=>setGrid('square')}>Square</button>
            <button onClick={()=>setGrid('chair')}>chair</button> */}
            

            <form 
            onSubmit={handleGrid}
            >
                <label>Square Table</label>
                <input type='checkbox' id="squareTable" />
                <br />
                <label>Grid</label>
                <input type='checkbox' id="grid" />
                <br />
                <label>Round Table</label>
                <input type='checkbox' id="roundTable" />
                <br />
                <label>Chair</label>
                <input type='checkbox' id="chair" />
                <br />
                <br />
                <p> only include table section and table number when working with tables</p>
                <br />
                <label>TableSection</label>
                <input type='text' id="tableSection" />
                <br />
                <label>TableNumber</label>
                <input type='number' id="tableNumber" />
                <br />
                <br />
                <p> only include chair number if working with a chair</p>
                <br />
                <label>chairNumber</label>
                <input type='text' id="chairNumber" />
                <br />
                <p>only include radius if you are working with a round table</p>
                <br />
                <label>radius</label>
                <input type='number' id='radius' />
                <br /> 
                <input type='submit' className="pointer" />
            </form>
          </div>
        }
      >
        {round ? <RoundTable radius={radius} number={number} 
        text={text}
        deleteTable={deleteTable}
        /> : <div  
    className={`pointer ${grid}`} 
    >
    <p>{text}</p>
    <p>{number}</p>
    </div>}
      </ContextMenu>
    
    )
}

export default Grid