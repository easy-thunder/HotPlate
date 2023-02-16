import Menu from "./Menu"



function Home({menuItems}){

    return(
        <div>
            Current menu
        {/* <MainPhoto /> */}
        <h3>Appetizer</h3>
        {menuItems.map(menuItem => {
        if(menuItem.appetizer === true || menuItem.all_times === true){
            
            return( <Menu menuItem={menuItem} key={menuItem.id}/>)
        }
        })}
<br />
        <h3>Entree</h3>
        {menuItems.map(menuItem => {
        if(menuItem.entree === true || menuItem.all_times === true){
            
            return( <Menu menuItem={menuItem} key={menuItem.id}/>)
        }
        })}
        <br />
        <h3>Dessert</h3>
        {menuItems.map(menuItem => {
        if(menuItem.dessert === true || menuItem.all_times === true){

            
            
            return( <Menu menuItem={menuItem} key={menuItem.id}/>)
        }
        })}

        </ div>
    )
}

export default Home