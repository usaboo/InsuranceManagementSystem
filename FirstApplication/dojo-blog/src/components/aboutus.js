import './aboutus.css'
import './w3images/team1.jpg'
import './w3images/team2.jpg'


const AboutUs = (props) => {
    return ( 
        <div>
            <head>
            <link rel="stylesheet" href="aboutus.css"/>
            </head>
            <div class="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by
                the way.</p>
            </div>
            <h2 style={{"text-align":"center"}}>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src = "./w3images/team1.jpg" alt="Jane" style={{"width":"100%"}}/>
                        <div class="container">
                            <h2>Sai Kiran</h2>
                            <p class="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>kiran98118@gmail.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src="team2.jpg" alt="Mike" style= {{"width":"100%"}}/>
                        <div class="container">
                            <h2>Utkarsh Saboo</h2>
                            <p class="title">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>karsh@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                 </div>
                 <button onClick = {()=>{props.func('Home')}}>Back</button>
            </div>
        </div>
     );
}
 
export default AboutUs;