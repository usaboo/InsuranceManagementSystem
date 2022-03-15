import { useState, useEffect } from 'react';
import Ourplans from './ourplans';
import axios from "axios";

const UserProfile = ({userdata,func}) =>
{
    const [plans,setplans] = useState(false)
    const [boughtplans, setboughtplans] = useState(null)

    function gotoplans()
    {
        setplans(true);
    }

    useEffect(()=>{
        console.log(userdata[0].Username)
        axios.post('/fetchdat', {
            values: userdata[0].Username
          }).then((res)=>{setboughtplans(res.data)})
    },[])

    if(!plans)
    {
    return ( 
        <div>
            <h1>Wecome to your page {userdata[0].FName}!!</h1>
            <h2>Your current invoices are ~~ </h2>
            { boughtplans!=null && boughtplans.map((indplan)=>(
                <p key = {indplan.PaymentID}>You purchased a {indplan.plan} plan for ${indplan.paymentamt} on {indplan.paymentdate}</p>
            ))}
            <button onClick = {()=>{gotoplans()}}>Buy some plans?</button>
            <button onClick = {()=>{func('Home')}}>Back</button>
        </div>
     );
    }

    else
    {
        return(
            <Ourplans user = {userdata[0]} func = {func}/>  
        )
    }
}
 
export default UserProfile;