import { useState } from "react";
import Payment from './payment';

const Buyplan = ({plan, cost, user, func}) => {

    const [count,setcount] = useState(0);
    const [disp,setdisp] = useState(false);
    const [totcost, settotcost] = useState(0);
    const [isptp,setptp] = useState(false);
    
    function increment()
    {
        setcount(count+1)
        if (count>=0)
        {
            setdisp(false)
            settotcost((count+1)*cost)
        }
    }

    function decrement()
    {
        setcount(count-1)
        settotcost((count-1)*cost)
        if (count<=0)
        {
            setdisp(true)
        }
    }

    function ptp()
    {
        setptp(true)
    }


    if(!isptp){
    return ( 
        <div>
            {disp == true &&
                <h2 style = {{color : 'red'}}>Please enter a valid number of plans</h2>
            }
            <h1>Hello {user.FName}</h1>
            <h2>You have chosen the {plan} plan</h2>
            <h2>Please select how many plans of this category would you like to purchase</h2>
            <button onClick = {increment}>+</button>
            <h5>You have chosen {count} tickets</h5>
            <button onClick = {decrement}>-</button>        
            {disp == false &&
                <div>
                <h2>You have to pay ${totcost}</h2>
                <button onClick = {ptp}>Proceed</button>
                </div>
            }
        </div>
     );
    }

    else{
        return(
            <Payment user = {user} plan = {plan} cost = {totcost} func = {func}/>
        )
    }

}
 
export default Buyplan;