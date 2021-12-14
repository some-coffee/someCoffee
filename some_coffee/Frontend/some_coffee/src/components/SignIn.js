import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

function SignIn(){

const [users,setUsers]=useState([])

    useEffect(()=>{

        
        axios.get("http://localhost:8080/user")
        .then((res)=>{
        setUsers(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
   } 
    
   ,[] )


    return(
<div>
        <form>
        <h1>Sign In</h1>
       
        <hr/>
        
        <label htmlFor="email"><b>User Name</b></label>
        <input type="text" placeholder="Enter User Name" name="name" required></input>
        <br/>
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required></input>
        
        
   
        </form>
   
   {users.map((e)=>{
    return console.log(e)
})}

</div>)
}

export default SignIn