


function SignUp(){



    return(
        <div className="border">
            <form>
                
                <label>name</label>
                <input type="text" placeholder="name" name="name"/>
                <br />
                <label>email</label>
                <input type="text" placeholder="email" name = "email"/>
                <br />
                <label>phone number</label>
                <input type='tel' placeholder="xxx-xxx-xxxx" name = "phone"/>
                <h2>Do you have any of the following allergies or food preferences?</h2>
                <label>gluten</label>
                <input type='checkbox' />
                <br />
                <label>vegetarian</label>
                <input type='checkbox' />
                <br />
                <label>fish</label>
                <input type='checkbox' />
                <br />
                <label>tree_nut</label>
                <input type='checkbox' />
                <br />
                <label>soy</label>
                <input type='checkbox' />
                <br />
                <label>peanuts</label>
                <input type='checkbox' />
                <br />
                <label>shellfish</label>
                <input type='checkbox' />
                <br />
                <label>dairy</label>
                <input type='checkbox' />
                <br />
                <label>any other conditions</label>
                <input type='text' placeholder="any other" name="anyOther" />
                <br />


                <label>password</label>
                <input type='password' placeholder="password"  name="password"/>
                <br />
                <label>confirm password</label>
                <input type='password' placeholder="confirm" name="confirm"/>
                <br />
                <input type='submit' />

                
            </form>
        </div>
    )
}


export default SignUp