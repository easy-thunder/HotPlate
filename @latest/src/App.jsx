import { useState, useEffect } from 'react'
import './App.css'
import "./index.css"
import { Switch, Route} from "react-router-dom"

import Home from "./noUserInfo/Home"
import Header from "./noUserInfo/Header"
import AllMenu from './noUserInfo/All_menu'
import SignUp from './noUserInfo/SignUp'

import UserHeader from './user/UserHeader'
import UserHome from './user/UserHome'
import Profile from './user/Profile'


function App() {
// const [test, setTest]= useState([])
const [menuItems, setMenuItems] = useState([])
const [login, setLogin] = useState('')
const [userInfo, setUserInfo] = useState({})



useEffect(()=>{
  fetch("http://localhost:9292/menu_items")
  .then(r => r.json())
  .then(setMenuItems)
  // .then(console.log(menuItems))
},[])

function clearLoginInfo(){
  setLogin(()=>{''})
  setUserInfo(()=>{{}})
}




function handleLoginInfo(user){
  
    
  setLogin(login => (login+":"+user.uuid))

  setUserInfo(user)
  // setCart(loginInfo.cart)

}


function checkUserInfo(){
  console.log(login)
  console.log(userInfo)
}




// console.log("test")


  return (
    <div className="App">
      <button onClick={checkUserInfo}>check user info</button>
      {login ? <UserHeader
      login={login}
      clearLoginInfo = {clearLoginInfo}
      /> 
      :
      <Header 
      handleLoginInfo = {handleLoginInfo} 
      />}

    <Switch>

{/* user info below */}
    <Route exact path = {`/userHome/${login}`}>
        <UserHome 
        userInfo={userInfo}
        menuItems = {menuItems}
        />
      </Route>

        <Route exact path = {`/profile/${login}`}>
          <Profile userInfo={userInfo} 
          setLogin={setLogin}
          handleLoginInfo = {handleLoginInfo}
          clearLoginInfo = {clearLoginInfo}
          // setUserInfo = {setUserInfo}
          login = {login}
          />
        </Route>

{/* no user info below */}
      <Route exact path= "/">
        <Home menuItems ={menuItems}/>
      </Route>

      <Route exact path = "/all_menu">
        <AllMenu menuItems = {menuItems}/>
      </Route>

      <Route exact path = "/sign_up">
        <SignUp handleLoginInfo={handleLoginInfo}/>
      </Route>






    </Switch>


    
    </div>
  )
}

export default App
