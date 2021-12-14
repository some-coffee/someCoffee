function SignUp(){


    return(
    <div>

     <form>
     <h1>Sign Up</h1>
     <p>Please fill in this form to create an account.</p>
     <hr/>
     <label htmlFor="email"><b>Name</b></label>
     <input type="text" placeholder="Enter Name" name="name" required></input>
     <br/>
     <label htmlFor="email"><b>User Name</b></label>
     <input type="text" placeholder="Enter User Name" name="name" required></input>
     <br/>
     
     <label htmlFor="email"><b>Email</b></label>
     <input type="text" placeholder="Enter Email" name="email" required></input>
     <br/>
     <label htmlFor="email"><b>Phone No.</b></label>
     <input type="text" placeholder="Enter User Name" name="name" required></input>
     <br/>
     <label htmlFor="email"><b>Age</b></label>
     <input type="text" placeholder="Enter User Name" name="name" required></input>
     <br/>
     <label htmlFor="psw"><b>Password</b></label>
     <input type="password" placeholder="Enter Password" name="psw" required></input>
     <br/>
    <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>


     </form>

    </div>
    )
}
export default SignUp
