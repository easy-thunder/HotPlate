import Menu from "./Menu"


function AllMenu({menuItems}){
    return(
        <div>
            what we offer
                    {/* <MainPhoto /> */}
        {/* <Menu menuItems = {menuItems}/> */}
        {menuItems.map(menuItem => {
            return(
            <Menu 
            menuItem={menuItem}
            key = {menuItem.id}
            />)
        })}

        </div>
    )
}

export default AllMenu