import Menu from "./Menu"



function Home({menuItems}){

    return(
        <div>
            Current menu
        
        {/* <MainPhoto /> */}
        {menuItems.map(menuItem => {
            return(
            <Menu menuItem={menuItem} key={menuItem.id}/>)
        })}

        </ div>
    )
}

export default Home