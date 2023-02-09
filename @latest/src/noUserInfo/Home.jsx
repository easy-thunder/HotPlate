import Menu from "./Menu"



function Home({menuItems}){

    return(
        <div>
            Current menu
        {/* <MainPhoto /> */}
        {/* <Menu menuItems = {menuItems}/> */}
        {menuItems.map(menuItem => {
            return(
            <Menu menuItem={menuItem}/>)
        })}

        </ div>
    )
}

export default Home