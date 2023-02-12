import Menu from "./Menu"
function AllMenu({menuItems}){ 
    let i = -1 
    return(
        <div>
            what we offer
                    {/* <MainPhoto /> */}
        {/* <Menu menuItems = {menuItems}/> */}
        {menuItems.map(menuItem => {
            i++ 
            return(
            <Menu 
            menuItem={menuItem}
            key = {menuItem.id}
            index = {i}
            />)
        })}



        </div>
    )
}

export default AllMenu