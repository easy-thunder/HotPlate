


function SignUp(){



    return(
        <div>
            <form>
                <label>name</label>
                <input type="text" placeholder="name" name="name"/>
                <br />
                <label>email</label>
                <input type="text" placeholder="email" name = "email"/>
                <br />
                <label>phone number</label>
                <input type='tel' placeholder="xxx-xxx-xxxx" name = "phone"/>
                
            </form>
        </div>
    )
}


export default SignUp