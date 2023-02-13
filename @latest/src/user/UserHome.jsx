import { checkTargetForNewValues } from "framer-motion"
import  Menu  from '../noUserInfo/Menu'






function UserHome ({userInfo, menuItems}){
    const foodPreference = []
    const filteredMenuItems =[]
menuItems.map(menuItem => {
        if((userInfo.pescetarian===true && menuItem.pescetarian === true) || 
        (userInfo.vegitarian === true && menuItem.vegitarian === true)
        ) {
            foodPreference.push(menuItem)
        }
})

// if (foodPreference){
//     foodPreference.map(menuItem => {
//         if ((userInfo.shellfish===true && menuItem.shellfish === true)
//             || (userInfo.gluten===true && menuItem.gluten === true) || 
//            (userInfo.fish===true && menuItem.fish === true) ||
//            (userInfo.dairy===true && menuItem.dairy === true) ||
//            (userInfo.tree_nut===true && menuItem.tree_nut === true) ||
//            (userInfo.soy===true && menuItem.soy === true) ||
//            (userInfo.peanuts===true && menuItem.peanuts === true))
//     })
// }
      
    
        

        foodPreference.map(menuItem => 
            {
                if ((userInfo.shellfish===true && menuItem.shellfish === true)
            || (userInfo.gluten===true && menuItem.gluten === true) || 
           (userInfo.fish===true && menuItem.fish === true) ||
           (userInfo.dairy===true && menuItem.dairy === true) ||
           (userInfo.tree_nut===true && menuItem.tree_nut === true) ||
           (userInfo.soy===true && menuItem.soy === true) ||
           (userInfo.peanuts===true && menuItem.peanuts === true)
        } )}
// foodPreference.map

        
        
        
//         ){null}
// //        
//         else{filteredMenuItems.push(menuItem)}

console.log(filteredMenuItems)



return(
    <div>
        Current menu
    
    {/* <MainPhoto /> */}
    <h3>Appetizer</h3>
    {filteredMenuItems.map(menuItem => {
    if(menuItem.appetizer === true){
        
        return( <Menu menuItem={menuItem} key={menuItem.id}/>)
    }
    })}
<br />
    <h3>Entree</h3>
    {filteredMenuItems.map(menuItem => {
    if(menuItem.entree === true){
        
        return( <Menu menuItem={menuItem} key={menuItem.id}/>)
    }
    })}
    <br />
    <h3>Dessert</h3>
    {filteredMenuItems.map(menuItem => {
    if(menuItem.dessert === true){
        
        return( <Menu menuItem={menuItem} key={menuItem.id}/>)
    }
    })}

    </ div>
)
}

export default UserHome















