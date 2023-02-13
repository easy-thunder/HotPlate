import {v4 as uuidv4} from 'uuid'
import { useHistory } from 'react-router-dom'
import{motion} from 'framer-motion';

function SignUp({handleLoginInfo}){
let myuuid = uuidv4()
const history = useHistory()


function signUp(e){
e.preventDefault()

const newUser = 
    {
    uuid: myuuid,
    name: e.target.name.value,
    email: e.target.sign_up_email.value,
    phone_number: e.target.phone.value,
    gluten:  e.target.gluten.checked,
    vegitarian: e.target.vegetarian.checked,
    pescetarian: e.target.pescetarian.checked,
    tree_nut: e.target.tree_nut.checked,
    soy: e.target.soy.checked,
    peanuts: e.target.peanuts.checked,
    shellfish: e.target.shellfish.checked,
    dairy: e.target.dairy.checked,
    any_other: e.target.anyOther.value,
    password: e.target.sign_up_password.value,
    points: 0
}
// console.log(newUser.email)
if(newUser.password === e.target.confirm.value && newUser.password.length >= 8){
fetch(`http://localhost:9292/users
`,{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(newUser)
})
.then(r=>r.json())
.then(handleLoginInfo(newUser),
history.push(`/userHome/:${newUser.uuid}`)
)


.catch(alert("You need a stronger password or this email is already associated with this restaurant"))

}
else{alert("passwords Don't match or your password isn't long enough")}


}


    return(
        <div className="flex flex-wrap -mx-3 mb-6">
            <form className="w-full max-w-lg" onSubmit={signUp}>
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="name"
                >
                Name</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" placeholder="name" id="name" />
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                >email</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="email" id = "sign_up_email"/>
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                 >phone number</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight
                 focus:outline-none focus:shadow-outline" type='tel' placeholder="xxx-xxx-xxxx" id = "phone"/>
                <h2>Do you have any of the following allergies or food preferences?</h2>
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

                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                 >any other conditions</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' placeholder="any other" id="anyOther" />
                <br />


                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                 >password</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='password' placeholder="password"  id="sign_up_password"/>
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                 >confirm password</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='password' placeholder="confirm" id="confirm"/>
                <br />
                <input 
                whileHover={ {scale:1.1} }
                whileTap={ {scale:0.9} }
                className='btn capitalize w-full lg:max-w-[240px] flex-center' type='submit'  />

                
            </form>
        </div>
    )
}


export default SignUp