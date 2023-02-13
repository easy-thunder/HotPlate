import Menu from "./Menu"
function AllMenu({menuItems}){ 
    let i = -1 
    return(
          <div className='relative z-10 top-72 lg:top-52'  > 
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
        </div>
    )
}

export default AllMenu