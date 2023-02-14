
function AdminHome(){
    function addMenuItem(){
        fetch()
    }
return(
    <div>
<form className="w-full max-w-lg" onSubmit={addMenuItem}>
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="name"
                >
                Name</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" placeholder="name" id="name" />
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                >description</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="description" id = "description"/>
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                 >price</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight
                 focus:outline-none focus:shadow-outline" type='number' placeholder="price" id = "price"/>
                 <br />
                 <label>Photo?</label>
                 <input type='file' id="photo" />
                 <br />
                <h2>Mark any potential allergies and dietary preferences this dish caters too.</h2>
                <label>gluten</label>
                <input type='checkbox' id="gluten" />
                <br />
                <label>vegetarian</label>
                <input type='checkbox' id="vegetarian" />
                <br />
                <label>fish</label>
                <input type='checkbox' id="fish" />
                <br />
                <label>tree_nut</label>
                <input type='checkbox' id="tree_nut" />
                <br />
                <label>soy</label>
                <input type='checkbox' id="soy" />
                <br />
                <label>peanuts</label>
                <input type='checkbox' id="peanuts" />
                <br />
                <label>shellfish</label>
                <input type='checkbox' id="shellfish" />
                <br />
                <label>dairy</label>
                <input type='checkbox' id="dairy" />
                <br />
                <label>pescetarian</label>
                <input type='checkbox' id="pescetarian" />

                <br />
                <label>heat Level</label>
                <input type='number' id="heatLevel" min='0' max='10' />
                <br />

                <label>Is this raw?</label>
                <input type='checkbox' id="raw" />
                <br />
                <label>Does the customer need to input how cooked they want this meal?</label>
                <input type='checkbox' id="need_how_cooked" />
                <h2>Dinner, lunch, brunch, breakfast, happyHour, or any time? You may only input one option</h2>
                <label>breakfast</label>
                <input type='checkbox' id="breakfast" />
                <label>lunch</label>
                <input type='checkbox' id="lunch" />
                <label>brunch</label>
                <input type='checkbox' id="brunch" />
                <label>dinner</label>
                <input type='checkbox' id="dinner" />
                <label>happyHour</label>
                <input type='checkbox' id="happy_hour" />
                <label>all_times</label>
                <input type='checkbox' id="all_times" />
                <label>Custom menu is applied anytime, but it gives you the option too make specials and remove quickly</label>
                <input type='checkbox' id="custom" />
                <h2>Day of the week special?</h2>
                <label>monday</label>
                <input type='checkbox' id="monday" />
                <label>tuesday</label>
                <input type='checkbox' id="tuesday" />
                <label>wednesday</label>
                <input type='checkbox' id="wednesday" />
                <label>thursday</label>
                <input type='checkbox' id="thursday" />
                <label>friday</label>
                <input type='checkbox' id="friday" />
                <label>saturday</label>
                <input type='checkbox' id="saturday" />
                <label>sunday</label>
                <input type='checkbox' id="sunday" />

                <h3>Entree, App, or dessert</h3>
                <label>entree</label>
                <input type='checkbox' id="entree" />
                <label>appetizer</label>
                <input type='checkbox' id="appetizer" />
                <label>dessert</label>
                <input type='checkbox' id="dessert" />



                <h3>Drink?</h3>
                <p>please note that if it is an alcoholic drink only checkbox alcohol. If it's a non-alcoholic only checkbox drink.</p>
                <label>drink</label>
                <input type='checkbox' id="drink" />
                <label>alcohol</label>
                <input type='checkbox' id="alcohol" />


                



               

                <br />
                <input 
                whileHover={ {scale:1.1} }
                whileTap={ {scale:0.9} }
                // className="btn btn-block"
                 type='submit'  />

                
            </form>



    </div>
)
}


export default AdminHome











