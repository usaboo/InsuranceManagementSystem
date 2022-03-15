import axios from "axios";
import { useState, useEffect } from "react";
import UserProfile from './profile';

const Login = (props) => {
    
    const [incorrectuser,setincorrectuser] = useState(false);
    const [validuser,setvaliduser] = useState(false);
    const [userdata,setuserdata] = useState(null);

    function handlesubmit(e){
        setincorrectuser(false)
        e.preventDefault();
        const var1 = document.getElementById('username').value 
        const var2 = document.getElementById('password').value
        axios.post('/login',{
            values : {var1,var2}
        }).then((res)=>{
            if(res.data.length === 0)
            {            
                setincorrectuser(true)
            }
            else
            {
                setuserdata(res.data)
                setvaliduser(true)
            }
        });
    }

    if(!validuser)
    {
    return ( 
        <div>
            {incorrectuser == true &&
                <h1>Invalid credentials</h1>
            }
            <form onSubmit={handlesubmit}>
                <label for = "username">Username:</label><br/>
                <input type = "text" id = "username" name = "username" required></input><br/>
                <label for = "password">Password:</label><br/>
                <input type = "password" id = "password" name = "password" required></input><br/>
                <button>Submit</button>
            </form>
        </div>
     );
    }

    else
    {
     return(
         <div>
            <UserProfile func = {props.func}  userdata = {userdata} />
         </div>
     )
    }

}
export default Login;