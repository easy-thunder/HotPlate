import { useState, useEffect } from 'react'
import './App.css'
import "./index.css"
import { Switch, Route} from "react-router-dom"

import Home from "./noUserInfo/Home"
import Header from "./noUserInfo/Header"
import AllMenu from './noUserInfo/All_menu'
import SignUp from './noUserInfo/SignUp'


function App() {
// const [test, setTest]= useState([])
const [menuItems, setMenuItems] = useState([])
useEffect(()=>{
  fetch("http://localhost:9292/menu_items")
  .then(r => r.json())
  .then(setMenuItems);
},[])

// console.log("test")


  return (
    <div className="App">
      <Header />

    <Switch>

      <Route exact path= "/">
        <Home menuItems ={menuItems}/>
      </Route>

      <Route exact path = "/all_menu">
        <AllMenu menuItems = {menuItems}/>
      </Route>

      <Route exact path = "/sign_up">
        <SignUp />
      </Route>






    </Switch>


    
    </div>
  )
}

export default App
