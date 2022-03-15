import { useState,useEffect } from "react";
import axios from "axios";

const Adminprofile = ({func, admindata}) => {
    const [allplans, setallplans] = useState(null)
    useEffect(()=>{
        console.log('here')
        console.log('here')
        console.log('here')
        axios.post('/alldata', {
            values: admindata[0].Username
          }).then((res)=>{setallplans(res.data)}) 
    },[])

    function deletepayment(ptd){
        axios.post('/delplan',{
            values : ptd
        }).then(axios.post('/alldata').then((res)=>{setallplans(res.data)}))
    }

    return ( 
        <div>
            <h1>Wecome to your page {admindata[0].FName}!!</h1>
            <h2>All current invoices are ~~ </h2>
            {allplans!=null && allplans.map((indplan)=>(
                <div>
                    <p key = {indplan.PaymentID}>User {indplan.Username} purchased {indplan.plan}</p>
                    <button onClick = {()=>{deletepayment(indplan.PaymentID)}}>Delete</button>
                </div>
            ))}
            <button onClick = {()=>{func('Home')}}>Back</button>
        </div>
     );
}
 
export default Adminprofile;