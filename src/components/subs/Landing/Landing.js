import React, { Component } from 'react';
import Slideshow from './SlideShow';
import { Button } from 'reactstrap';
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
class Landing extends Component {



    render() { 
        return ( <div>
            <div style={{ position: "relative" }}><Slideshow /></div>
            

            <h1 style={{ fontSize: "5em", fontWeight: "900", marginTop: "250px", marginBottom: "1em", background: "#9f95c3", color: "#e2e3db", textAlign: "center", borderRadius : "9px"}}>GIVE ME SOME MLQ</h1>
            <div className="row">
                
                <div className="col-8">
                    <YoutubeEmbed embedId="1717zs_e9zw" />
                </div>

                <div className="col-4" style={{ opacity: "1" }}>
                    <p>Welcome to the Fractio Framework </p>
                    <p>

                    </p>
                </div>
            </div>
            <div className="row">
                <div style={{ textAlign: "center", padding: "2em" , marginTop: "2em"}} className="col alert">
                    <h1>PYEditor</h1><img style={{marginTop: "4em", marginBottom: "2em"}} src="./PYE_Logo.png" alt="" />
                    <Button>Create PYE</Button>
                    </div>
                    <div style={{ textAlign: "center", padding: "2em", marginTop: "2em"}} className="col alert">
                        <h1>FRXionizer</h1><img style={{marginTop: "4em", marginBottom: "2em"}} src="./FRX_Logo.png" alt="" />
                        <Button>FRXionize</Button>
                        </div>
                        <div style={{ textAlign: "center", padding: "2em", marginTop: "2em"}} className="col alert">
                            <h1>MLQuidity</h1><img style={{marginTop: "2em", marginBottom: "2em"}} src="./MLQ_Logo.png" alt="" />
                            <Button>Provide MLQ</Button>
                            </div>
            </div>
        </div> );
    }
}
 
export default Landing;