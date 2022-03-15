import axios from "axios";
import { useState } from "react"

const Payment = ({user, plan, cost, func}) => {
    
    const [disp, setdisp] = useState(false)
    const [message, setmessage] = useState(null)

    function handlesubmit(e)
    {
        setdisp(false);

        var reg1 = /^\d{16}$/
        var reg2 = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

        const value1 = document.getElementById('name').value
        const value2 = document.getElementById('number').value
        const value3 = document.getElementById('expiry').value
        const value4 = document.getElementById('email').value

        var variable = true;

        if (!reg1.test(value2)){
            variable = false;
            setdisp(true)
            setmessage('Please enter a valid card number')
        }

        if(!reg2.test(value4)){
            variable = false;
            setdisp(true)
            setmessage('Please enter a valid email')
        }

        if(variable === true){
            axios.post('/makepayment', {
                values : [value1,value2, value3, value4, user, plan, cost]
            }).then(()=>{
                setdisp(true)
                setmessage('payment made! Press home to return')
            })
    }

    }
    return ( 
        <div>
                { disp == true &&
                    <h1 style = {{color : 'red'}}>{message}</h1>
                }
                <label for = "name">Name on Card:</label><br/>
                <input type = "text" id = "name" name = "name" required></input><br/>
                <label for = "number">Card Number:</label><br/>
                <input type = "text" id = "number" name = "number" required></input><br/>
                <label for = "expiry">Expiry:</label><br/>
                <input type = "date" id = "expiry" name = "expiry" required></input><br/>
                <label for = "">CVV:</label><br/>
                <input type = "text" id = "cvv" name = "cvv" required></input><br/>
                <label for = "email">Email to send recipt:</label><br/>
                <input type = "text" id = "email" name = "email" required></input><br/>
                <h5>Total cost : ${cost}</h5>
                <button onClick={handlesubmit}>Pay Now</button>
                <button onClick = {()=>{func('Home')}}>Home</button>
            
        </div>
     );
}
 
export default Payment;