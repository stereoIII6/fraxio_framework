import React, { Component } from 'react';
class About extends Component {
    state = {  }
    render() { 
        return ( <div>
            <h1>About</h1><hr></hr>
            
            <p style={{fontSize: "1.5em"}}>Fractio is a platform that allows you to easily make dynamic digital art that evolves and reacts to the real world.<br/><br/>
            <br/><br/>
            Our goal is to remove the boundaries that limit what you can work with. When art and information integrate, the limits become only your imagination.<br /><br />
            A painting of a tropical seascape that displays the sunrise and sunset in Maui in real time; A rocketship that blasts off to the moon when a crypto 
            token hits a certain price; Music that automatically adds different instrumental tracks to be more and more upbeat as your favorite team scores goals. <br /><br />
            Fractio makes creations like these possible without needing to write any code whatsoever, letting you focus on your vision for the piece.
</p>
        </div> );
    }
}
 
export default About;