import React, { useState, useEffect } from 'react';
import Aboutus from './aboutus';
import Signupform from './signupform';
import Login from './login';
import Adminlogin from './adminlogin'

const Homepage = (props) => {

    const [page, setPage] = useState('Home');
    

    function gotopage(pagename){
        setPage(pagename)
    }


    if (page === 'Home'){
    return (

            <div classname = "Homepage"> 
                <h1>Utkarsh And Sai Travel Insurance</h1>
                <h2>Travel Stress Free With our new insurance plans</h2>
                <button className="Home">Home</button>
                <button className = "Home" onClick={()=>{gotopage('Aboutus')}}>AboutUs</button>
                <button className = "Home" onClick = {()=>gotopage('Signupform')}>Signup!</button>
                <button className = "Home" onClick = {()=>gotopage('Login')}>Login!</button>
                <button className = "Home" onClick = {()=>gotopage('Admin')}>Admin!</button>
            </div>
     );
    }

    if (page === 'Aboutus'){
        return (
            <Aboutus func = {gotopage}/>
        )
    }

    if(page === 'Login'){
        return (
            <Login func = {gotopage}/>
        )
    }

    if (page === 'Signupform'){
        return (
            <Signupform func = {gotopage}/>
        )

    }

    if (page === 'Admin'){
        return (
            <Adminlogin func = {gotopage}/>
        )

    }

}
 
export default Homepage;