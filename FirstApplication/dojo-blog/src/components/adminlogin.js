import { useState } from "react";
import axios from "axios";
import Adminprofile from "./adminprofile";

const Adminlogin = (props) => {
        
    const [incorrectadmin,setincorrectadmin] = useState(false);
    const [validadmin,setvalidadmin] = useState(false);
    const [admindata,setadmindata] = useState(null);

    function handlesubmit(e){
        setincorrectadmin(false)
        e.preventDefault();
        const var1 = document.getElementById('username').value 
        const var2 = document.getElementById('password').value
        console.log(var1)
        console.log(var2)
        axios.post('/adminlogin',{
            values : {var1,var2}
        }).then((res)=>{
            console.log(res.data.length)
            if(res.data.length === 0)
            {            
                setincorrectadmin(true)
            }
            else
            {
                console.log(res.data)
                setadmindata(res.data)
                setvalidadmin(true)
            }
        });
    }

    if(!validadmin)
    {
    return ( 
        <div>
            {incorrectadmin == true &&
                <h1>Invalid credentials</h1>
            }
            <form onSubmit={handlesubmit}>
                <label for = "username">AdminID:</label><br/>
                <input type = "text" id = "username" name = "username" required></input><br/>
                <label for = "password">Admin Password:</label><br/>
                <input type = "password" id = "password" name = "password" required></input><br/>
                <button>Submit</button>
                <button onClick={()=>{props.func('Home')}}>Back</button>
            </form>
        </div>
     );
    }

    else
    {
     return(
         
         <div>
            <Adminprofile func = {props.func}  admindata = {admindata} />
         </div>
     )
    }

}
 
export default Adminlogin;