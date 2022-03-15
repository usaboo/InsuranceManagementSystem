import { useState } from "react";
import Buyplan from './buyplan';

const Ourplans = ({user, func}) => {
    
    console.log(user)
    const [buyp, setbuyp] = useState(false)
    const [plan,setplan] = useState(null)
    const [cost,setcost] = useState(null)
    function purplan(plantype)
    {
        console.log(plantype)
        setbuyp(true)
        setplan(plantype)
        if (plantype === 'premium'){ setcost(150) }

        else if (plantype === 'stay'){setcost(80)}

        else if (plantype === 'flight'){setcost(90)}
    }

    if(!buyp){
    return ( 
        <ul>
            <li onClick = {()=>{purplan('premium')}}>Premium Insurance</li>
            <p>
                Our premium plan is most customers go to when it comes to insuring their travel. This pack covers each and every part your travel 
                and then some. We cover every travel details such as late fights, cancelled flights, luggage mismanagement, flight accidents. Coming to stay, we cover stolen luggage, lodging mismanagement,
                during stay accidents and so much more. [150$/person]
            </p>

            <li onClick={()=>{purplan('flight')}}>Flight insurance</li>
            <p> 
                This is our best selling plan which covers all of your flight concerns including but not limited to luggage mismanagement, in-flight accidents, flight delays, cancellation etc.[90$/person]
            </p>

            <li onClick={()=>{purplan('stay')}} >Stay Insurance</li>
            <p>
                This insurance covers everything that could potentially be of concern during your stay ~ including luggage getting stolen mid trip, hotel cancellations, cab mismanagement.[80$/person]
            </p>
            <button onClick = {()=>func('Home')}>Back</button>
        </ul>
        
     );
    }

    else{
        return (
        <Buyplan plan = {plan} cost = {cost} user = {user} func = {func}/>
        )
    }
}
 
export default Ourplans;