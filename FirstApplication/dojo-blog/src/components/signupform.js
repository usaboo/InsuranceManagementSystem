import { useState } from "react";
import axios from "axios";

const Signupform = (props) => {

    const [message,setMessage] = useState('No message');
    const [display,setDisp] = useState(false);

    function Message(message)
    {
        setMessage(message)
    };

    function Disp(input)
    {
        setDisp(input)
    };

    function handlesubmit(e)
    {
        e.preventDefault();

        Disp(false)
        var reg1 = /^\d{10}$/

        var reg2 = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

        var reg3 = /^[\w@-]{8,20}$/

        const value1 = document.getElementById('contact').value
        const value2 = document.getElementById('email').value
        const value3 = document.getElementById('password').value
        const value4 = document.getElementById('rpassword').value
        const value5 = document.getElementById('fname').value
        const value6 = document.getElementById('lname').value
        const value7 = document.getElementById('username').value
        
        var variable = true;

        if (value3!==value4){
            variable = false;
            Disp(true)
            Message('Error: Both passwords must match! Try again')
        }

        if (!reg3.test(value3)){
            variable = false;
            Disp(true)
            Message('Password does not match set criterion')
        }
        
        
        if (!reg1.test(value1)){
            variable = false;
            Disp(true)
            Message('Please enter a valid telephone number')
        }

        if(!reg2.test(value2)){
            variable = false;
            Disp(true)
            Message('Please enter a valid email')
        }
        
        if(variable === true){
        axios.post('/createuser', {
            values : [value5, value6, value7, value2, value1, value3]
          }).then((result)=>{
              console.log(result.data)
              console.log(result)
              if(result.data == 'Sorry this username has been taken')
              {
                Disp(true)
                Message('Sorry this username has been taken')
              }
              else
              {
                Disp(true)
                Message('User successfully created :)')  
              }
          });         
        }
    }
    
    
    
    return ( 
        <div>
            <form onSubmit={handlesubmit}>
                { display === true &&
                    <h1 style = {{color : 'red'}}>
                        {message}
                    </h1>
                }
                <label for = "fname">First Name:</label><br/>
                <input type = "text" id = "fname" name = "fname" required></input><br/>
                <label for = "lname">Last Name:</label><br/>
                <input type = "text" id = "lname" name = "lname" required></input><br/>
                <label for = "contact">Contact Number:</label><br/>
                <input type = "text" id = "contact" name = "contact" required></input><br/>
                <p style = {{fontSize : 12}}>Telephone must be a valid US telephone number (10 digits)</p>
                <label for = "email">Email Address:</label><br/>
                <input type = "text" id = "email" name = "email" required></input><br/>
                <p style = {{fontSize : 12}}>Email must be a valid address, e.g. me@mydomain.com</p>
                <label for = "username">Username:</label><br/>
                <input type = "text" id = "username" name = "username" required></input><br/>
                <label for = "password">Password:</label><br/>
                <input type = "password" id = "password" name = "password" required></input><br/>
                <p style = {{fontSize : 12}}>Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>
                <label for = "rpassword">Confirm password:</label><br/>
                <input type = "password" id = "rpassword" name = "rpassword" required></input><br/>
                <input type = "submit"/>
                <button onClick={()=>{props.func('Home')}}>Home</button>
            </form>
        </div>
     );
}
 
export default Signupform;