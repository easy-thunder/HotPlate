

function SignUp(){


function signUp(e){
e.preventDefault()
newUser = 
    {
    name: e.target.name.value,
    email: e.target.sign_up_email.value,
    phone_number: e.target.phone.value,
    gluten:  e.target.gluten.checked,
    vegetarian: e.target.vegetarian.checked,
    pescetarian: e.target.pescetarian.checked,
    tree_nut: e.target.tree_nut.checked,
    soy: e.target.soy.checked,
    peanuts: e.target.peanuts.checked,
    shellfish: e.target.shellfish.checked,
    dairy: e.target.dairy.checked,
    anyOther: e.target.anyOther.value,
    sign_up_password: e.target.sign_up_password.value,
    confirm_password: e.target.confirm.value
}


}


    return(
        <div className="border">
            <form onSubmit={signUp}>
                <label>name</label>
                <input type="text" placeholder="name" id="name"/>
                <br />
                <label>email</label>
                <input type="text" placeholder="email" id = "sign_up_email"/>
                <br />
                <label>phone number</label>
                <input type='tel' placeholder="xxx-xxx-xxxx" id = "phone"/>
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

                <label>any other conditions</label>
                <input type='text' placeholder="any other" id="anyOther" />
                <br />


                <label>password</label>
                <input type='password' placeholder="password"  id="sign_up_password"/>
                <br />
                <label>confirm password</label>
                <input type='password' placeholder="confirm" id="confirm"/>
                <br />
                <input type='submit' />

                
            </form>
        </div>
    )
}


export default SignUp